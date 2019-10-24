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
import AddCategoryButton from "./UI/Buttons/AddCategoryButton";
import SelectedCategoryButton from "./UI/Buttons/SelectedCategoryButton";
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
import SubNav from './UI/SubNav/SubNav';
import { DropDown, DropDownItem } from './UI/DdropDown/DropDown';
import FromToInput from './UI/Forms/FromToInput';
import IconButton from './UI/Buttons/IconButton';
import ButtonXL from './UI/Buttons/ButtonXL';
import ShowMoreText from './UI/Text/ShowMoreText';
import PriceInput from './UI/Forms/PriceInput';
import ContentSpinner from './UI/Spinner/ContentSpinner';
import Table from './UI/Table';
import PublishedBy from './UI/PublishedBy/PublishedBy';
import SelectImages from './UI/SelectImages';
import ErrorMessage from './UI/ErrorMessage/ErrorMessage';
import CircleChart from './UI/CircleChart/CircleChart';
import SearchInput from './UI/Layout/Navigation/SearchInput';
import Overlay from './UI/Overlay/Overlay';
import Alert from './UI/Alert/Alert';
import Pagination from './UI/Pagination/Pagination';
import RoundedButton from './UI/Buttons/RoundedButton';

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
import ChooseCategory from './Company/Modals/ChooseCategory/ChooseCategory';
import VotingCard from './Customer/Cards/VotingCard/VotingCard';
import VotingCardShowInterestButton from './Customer/Cards/VotingCard/VotingCardShowInterestButton';
import VotingCardShareButton from './Customer/Cards/VotingCard/VotingCardShareButton';
import BiddingCard from './Customer/Cards/BiddingCard/BiddingCard';
import BiddingCardShareButton from './Customer/Cards/BiddingCard/BiddingCardShareButton';
import SaleCard from './Customer/Cards/SaleCard/SaleCard';
import SaleCardAddToCartButton from './Customer/Cards/SaleCard/SaleCardAddToCartButton';
import Onboarding from './Customer/Modals/Onboarding/Onboarding';
import Categories from './Company/Modals/ChooseCategory/Categories';
import CustomerCategories from './Customer/Modals/ChooseCategory/Categories';
import TipioSidebarVotingCard from './Customer/CustomerSidebarCards/VotingCard';
import TipioSidebarBindingCard from './Customer/CustomerSidebarCards/BindingCard';
import ImageUploader from './Customer/ImageUploader/ImageUploader';
import CategoriesForm from './Company/Modals/ChooseCategory/CategoriesForm';

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
import OrderItemCard from './Company/Cards/OrderItemCard/OrderItemCard';
import OrderFilters from './Company/Cards/OrderItemCard/OrderFilters';
import BaseCompanyCard from './Company/Cards/BaseCompanyCard/BaseCompanyCard';
import AddSaleCompanyCard from './Company/Cards/AddSaleCompanyCard/AddSaleCompanyCard';
import CustomerListCompanyCard from './Company/Cards/CustomerListCompanyCard/CustomerListCompanyCard';
import GiveOfferCompanyCard from './Company/Cards/GiveOfferCompanyCard/GiveOfferCompanyCard';
import TipioWithOfferCompanyCard from './Company/Cards/TipioWithOfferCompanyCard/TipioWithOfferCompanyCard';
import ChooseAddSaleCompanyCard from './Company/Cards/ChooseAddSaleCompanyCard/ChooseAddSaleCompanyCard';
import CompanySidebarBaseCard from './Company/CompanySidebarCards/CompanySidebarBaseCard';
import CompanyAddBidCard from   './Company/CompanySidebarCards/CompanyAddBidCard';
import AddMoreSaleCompanyCard from './Company/Cards/AddMoreSaleCompanyCard/AddMoreSaleCompanyCard';
import AddMoreSaleEndedCompanyCard from './Company/Cards/AddMoreSaleEndedCompanyCard/AddMoreSaleEndedCompanyCard';
import AddSaleSidebarCard from   './Company/CompanySidebarCards/AddSaleSidebarCard';
import MaterialSearch from './Company/MaterialSearch/MaterialSearch';

/*
*   Layout
* */
import PublicLayout from './UI/Layout/Public/index';


/*
*   Icons
* */
import InteriorIcon from './UI/Icons/InteriorIcon';
import ArrowDownIcon from './UI/Icons/ArrowDownIcon';
import RemoveImageIcon from './UI/Icons/RemoveImageIcon';
import ExportIcon from './UI/Icons/ExportIcon';
import SearchIcon from './UI/Icons/SearchIcon';
import CloseIcon from './UI/Icons/CloseIcon';
import FilterIcon from './UI/Icons/FilterIcon';

/**
 * UTILS
 */
import calculateDiscountPercentage from './Util/calculateDiscountPercentage';

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
    OrderItemCard,
    CategoriesForm,
    BaseCompanyCard,
    AddSaleCompanyCard,
    CustomerListCompanyCard,
    GiveOfferCompanyCard,
    TipioWithOfferCompanyCard,
    ChooseAddSaleCompanyCard,
    SubNav,
    InteriorIcon,
    CompanySidebarBaseCard,
    ArrowDownIcon,
    CustomerCategories,
    ButtonXL,
    CompanyAddBidCard,
    DropDown,
    DropDownItem,
    FromToInput,
    ShowMoreText,
    PriceInput,
    ContentSpinner,
    Table,
    PublishedBy,
    IconButton,
    SelectImages,
    ErrorMessage,
    OrderFilters,
    AddMoreSaleCompanyCard,
    RemoveImageIcon,
    calculateDiscountPercentage as _util_CalculateDiscountPercentage,
    MaterialSearch,
    ExportIcon,
    CircleChart,
    AddSaleSidebarCard,
    AddCategoryButton,
    SelectedCategoryButton,
    SearchInput,
    SearchIcon,
    CloseIcon,
    FilterIcon,
    Overlay,
    AddMoreSaleEndedCompanyCard,
    Alert,
    Pagination,
    RoundedButton
};
