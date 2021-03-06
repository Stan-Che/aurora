import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Provider } from './Context';

import { deviceConnectionStateShape } from './shape';
import { FALSY_CONNECTIONS_STATE } from './constants';

class DeviceConnectionProvider extends Component {
  static initialState = {
    ...FALSY_CONNECTIONS_STATE,
    '4g': true,
    isInitialized: false
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    defaultState: PropTypes.shape(deviceConnectionStateShape)
  };

  static defaultProps = {
    defaultState: null
  };

  constructor(props) {
    super(props);
    const { defaultState } = props;

    this.state = defaultState || this.initialState;
  }

  componentDidMount() {
    const { effectiveType, type, saveData } = global.navigator.connection;

    if (effectiveType || type) {
      this.subscribe();
      this.update({
        [effectiveType || type]: true,
        isInitialized: true,
        saveData
      });
    }
  }

  componentWillUnmount = () => {
    const { isInitialized } = this.state;

    if (isInitialized) {
      this.unsubscribe();
    }
  };

  /* istanbul ignore next */
  onConnectionChange() {
    const { effectiveType, type, saveData } = global.navigator.connection;
    this.update({ [effectiveType || type]: true, saveData });
  }

  subscribe() {
    global.navigator.connection.addEventListener(
      'change',
      this.onConnectionChange
    );
  }

  // eslint-disable-next-line
  unsubscribe() {
    global.navigator.connection.removeEventListener('change');
  }

  update(payload) {
    this.setState({
      ...FALSY_CONNECTIONS_STATE,
      ...payload
    });
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export default DeviceConnectionProvider;
