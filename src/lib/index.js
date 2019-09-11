import styles from './styles/main.scss';

/*
*   UI Components
* */
import TextInput from "./UI/TextInput/TextInput";
import SecondaryButton from "./UI/Buttons/SecondaryButton";
import SecondaryOutlineButton from "./UI/Buttons/SecondaryOutlineButton";
import DisabledButton from "./UI/Buttons/DisabledButton";
import { Modal, ModalType } from "./UI/Modal/Modal";
import OnboardingTooltip from './UI/OnboardingTooltip/OnboardingTooltip';
import SuccessModal from './UI/Modal/SuccessModal/SuccessModal';
import ModalSpinner from './UI/Modal/ModalSpinner/ModalSpinner';
import { Accordion } from './UI/Accordion/Accordion';
import PinkyCountdownSM from './UI/Countdown/PinkyCountdownSM';
import TipioCountdown from './UI/TipioCountdown/TipioCountdown';
import Select from './UI/Select/Select';
import * as CountdownType from "./UI/Countdown/CountdownType";
import Input from './UI/Forms/Input';
import Textarea from './UI/Forms/Textarea';


/*
*   Customer/Private Components
* */
import TipioWithOffer from './Customer/Modals/TipioWithOffer/TipioWithOffer';
import TipioConfirmation from './Customer/Modals/TipioConfirmation/TipioConfirmation';
import LoginOrRegister from './Customer/Modals/LoginOrRegister/LoginOrRegister';
import ImageCropper from './UI/Modal/ImageCropper/ImageCropper';
import JoinTipioOnboarding from './Customer/Modals/JoinTipioOnboarding/JoinTipioOnboarding';
import VerticalTimeline from './Customer/Modals/VerticalTimeline/VerticalTimeline';
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
/*
*   Company Components
* */
import DeleteAccount from './Company/Modals/DeleteAccount/DeleteAccount';
import AddAdditionalSales from './Company/Modals/AddAdditionalSales/AddAdditionalSales';
import WonBiddingRound from './Company/Modals/WonBiddingRound/WonBiddingRound';


export {
    styles,
    TextInput,
    SecondaryButton,
    SecondaryOutlineButton,
    DisabledButton,
    Modal,
    ModalType,
    OnboardingTooltip,
    TipioWithOffer,
    TipioConfirmation,
    LoginOrRegister,
    SuccessModal,
    ImageCropper,
    ModalSpinner,
    JoinTipioOnboarding,
    VerticalTimeline,
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
    Select
};
