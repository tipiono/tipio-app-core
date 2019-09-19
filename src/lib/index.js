import styles from './styles/main.scss';

/*
*   UI Components
* */
import SecondaryButton from "./UI/Buttons/SecondaryButton";
import SecondaryOutlineButton from "./UI/Buttons/SecondaryOutlineButton";
import DisabledButton from "./UI/Buttons/DisabledButton";
import GrayButton from "./UI/Buttons/GrayButton";
import GrayOutlineButton from "./UI/Buttons/GrayOutlineButton";
import LinkButton from "./UI/Buttons/LinkButton";
import { Modal, ModalType } from "./UI/Modal/Modal";
import OnboardingTooltip from './UI/OnboardingTooltip/OnboardingTooltip';
import SuccessModal from './UI/Modal/SuccessModal/SuccessModal';
import ModalSpinner from './UI/Modal/ModalSpinner/ModalSpinner';
import { Accordion } from './UI/Accordion/Accordion';
import PinkyCountdownSM from './UI/Countdown/PinkyCountdownSM';
import TipioCountdown from './UI/TipioCountdown/TipioCountdown';
import Select from './UI/Forms/Select';
import * as CountdownType from "./UI/Countdown/CountdownType";
import Input from './UI/Forms/Input';
import Textarea from './UI/Forms/Textarea';
import Checkbox from './UI/Forms/Checkbox';
import RadioButton from './UI/Forms/RadioButton';
import ToggleSwitch from './UI/Forms/ToggleSwitch';
import ImageSlider from './UI/ImageSlider/ImageSlider';
import ProductDetails from './UI/ProductDetails/ProductDetails';
import Tabs from './UI/Tabs/Tabs';
import TabNav from './UI/Tabs/TabNav';
import TabNavItem from './UI/Tabs/TabNavItem';
import TabContent from './UI/Tabs/TabContent';
import TabContentItem from './UI/Tabs/TabContentItem';
import PillTabs from './UI/PillTabs/PillTabs';
import Avatar from './UI/Avatar/Avatar';


/*
*   Customer/Private Components
* */
import TipioWithOffer from './Customer/Modals/TipioWithOffer/TipioWithOffer';
import TipioConfirmation from './Customer/Modals/TipioConfirmation/TipioConfirmation';
import LoginOrRegister from './Customer/Modals/LoginOrRegister/LoginOrRegister';
import ImageCropper from './UI/Modal/ImageCropper/ImageCropper';
import JoinTipioOnboarding from './Customer/Modals/JoinTipioOnboarding/JoinTipioOnboarding';
import VerticalTimeline from './Customer/Modals/VerticalTimeline/VerticalTimeline';
import HorizontalTimeline from './Customer/Timelines/HorizontalTimeline';
import OnboardingMovie from './Customer/Modals/OnboardingMovie/OnboardingMovie';
import ReadyToBid from './Customer/Modals/ReadyToBid/ReadyToBid';
import ChooseCategory from './Customer/Modals/ChooseCategory/ChooseCategory';
import VotingCard from './Customer/Cards/VotingCard/VotingCard';
import VotingCardShowInterestButton from './Customer/Cards/VotingCard/VotingCardShowInterestButton';
import VotingCardShareButton from './Customer/Cards/VotingCard/VotingCardShareButton';
import BiddingCard from './Customer/Cards/BiddingCard/BiddingCard';
import BiddingCardShareButton from './Customer/Cards/BiddingCard/BiddingCardShareButton';
import SaleCard from './Customer/Cards/SaleCard/SaleCard';
import SaleCardAddToCartButton from './Customer/Cards/SaleCard/SaleCardAddToCartButton';
import Onboarding from './Customer/Modals/Onboarding/Onboarding';
import Categories from './Customer/Modals/ChooseCategory/Categories';
import TipioSidebarVotingCard from './Customer/TipioSidebarCards/VotingCard';
import TipioSidebarBindingCard from './Customer/TipioSidebarCards/BindingCard';
import ImageUploader from './Customer/ImageUploader/ImageUploader';

/*
*   Company Components
* */
import DeleteAccount from './Company/Modals/DeleteAccount/DeleteAccount';
import AddAdditionalSales from './Company/Modals/AddAdditionalSales/AddAdditionalSales';
import WonBiddingRound from './Company/Modals/WonBiddingRound/WonBiddingRound';
import EmptyAvatar from './Company/Avatar/EmptyAvatar';
import ChangeAvatar from './Company/Avatar/ChangeAvatar';
import EmptyCover from './Company/CoverImage/EmptyCover';
import ChangeCover from './Company/CoverImage/ChangeCover';
import Cover from './Company/CoverImage/Cover';
import OrderItemCard from './Company/Cards/OrderItemCard';


/*
*   Layout
* */
import PublicLayout from './UI/Layout/Public/index';

export {
    styles,
    SecondaryButton,
    SecondaryOutlineButton,
    DisabledButton,
    LinkButton,
    GrayButton,
    Modal,
    ModalType,
    OnboardingTooltip,
    TipioWithOffer,
    TipioConfirmation,
    LoginOrRegister,
    SuccessModal,
    ImageCropper,
    GrayOutlineButton,
    ModalSpinner,
    JoinTipioOnboarding,
    VerticalTimeline,
    HorizontalTimeline,
    OnboardingMovie,
    ReadyToBid,
    ChooseCategory,
    DeleteAccount,
    AddAdditionalSales,
    WonBiddingRound,
    VotingCard,
    VotingCardShowInterestButton,
    VotingCardShareButton,
    BiddingCard,
    BiddingCardShareButton,
    Onboarding,
    Categories,
    Accordion,
    SaleCard,
    SaleCardAddToCartButton,
    PinkyCountdownSM,
    TipioCountdown,
    CountdownType,
    Input,
    Textarea,
    Select,
    Checkbox,
    RadioButton,
    ToggleSwitch,
    TipioSidebarVotingCard,
    TipioSidebarBindingCard,
    ImageSlider,
    ProductDetails,
    ImageUploader,
    Tabs,
    TabNav,
    TabNavItem,
    TabContent,
    TabContentItem,
    PillTabs,
    EmptyAvatar,
    EmptyCover,
    PublicLayout,
    Avatar,
    ChangeAvatar,
    ChangeCover,
    Cover,
    OrderItemCard
};
