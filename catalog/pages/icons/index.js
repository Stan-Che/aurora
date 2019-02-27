import { pageLoader } from "catalog";

import {
  CAIcon,
  CampsiteIcon,
  ChevronIcon,
  ClubIcon,
  CrossIcon,
  ConcessionIcon,
  DonationIcon,
  FacebookIcon,
  GeneralIcon,
  InstagramIcon,
  HotelIcon,
  MealIcon,
  MembershipIcon,
  MerchandiseIcon,
  OverflowIcon,
  ParkingIcon,
  SpecialIcon,
  StarIcon,
  TransportationIcon,
  TwitterIcon,
  USIcon,
  VenueIcon,
  VipIcon,
  YoutubeIcon,
  WarningIcon,
  // approved icons
  InfoDotIcon,
  ErrorIcon,
  SuccessIcon,
  InfoIcon,
  BackIcon,
  ForwardIcon,
  UpIcon,
  DownIcon,
  CloseIcon,
  DeleteIcon,
  CalendarIcon,
  HomeIcon,
  SearchIcon,
  BookmarkIcon,
  ClearIcon,
  EditIcon,
  FeedbackIcon,
  FilterIcon,
  LocationIcon,
  TicketIcon,
  TicketsIcon,
  UserIcon,
  VenueSearchIcon,
  PlusIcon,
  CreateNewIcon,
  FraudulentActivityIcon,
  PrintIcon
} from "../../../src/components/Icons/index";
import { Container, Row, Column } from "../../../src/components/Grid";
import { themes } from "../../../src/theme";

const iconStyle = {
  backgroundColor: themes.global.white.base,
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const iconLabelStyle = {
  padding: "10px",
  textAlign: "center"
};

export default {
  path: "/icons",
  title: "Icons",
  imports: {
    CAIcon,
    CampsiteIcon,
    ChevronIcon,
    ClubIcon,
    CrossIcon,
    ConcessionIcon,
    DonationIcon,
    FacebookIcon,
    GeneralIcon,
    InstagramIcon,
    HotelIcon,
    MealIcon,
    MembershipIcon,
    MerchandiseIcon,
    OverflowIcon,
    ParkingIcon,
    SpecialIcon,
    StarIcon,
    TransportationIcon,
    TwitterIcon,
    USIcon,
    VenueIcon,
    VipIcon,
    YoutubeIcon,
    WarningIcon,

    InfoDotIcon,
    ErrorIcon,
    SuccessIcon,
    InfoIcon,
    BackIcon,
    ForwardIcon,
    UpIcon,
    DownIcon,
    CloseIcon,
    DeleteIcon,
    CalendarIcon,
    HomeIcon,
    SearchIcon,
    BookmarkIcon,
    ClearIcon,
    EditIcon,
    FeedbackIcon,
    FilterIcon,
    LocationIcon,
    TicketIcon,
    TicketsIcon,
    UserIcon,
    VenueSearchIcon,

    Column,
    Container,
    Row,

    iconStyle,
    iconLabelStyle,
    PlusIcon,
    CreateNewIcon,
    FraudulentActivityIcon,
    PrintIcon
  },
  content: pageLoader(() => import("./index.md"))
};
