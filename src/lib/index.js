import styles from './styles/main.scss';

/*
*   UI Components
* */
import TextInput from "./UI/TextInput/TextInput";
import SecondaryButton from "./UI/Buttons/SecondaryButton";
import SecondaryOutlineButton from "./UI/Buttons/SecondaryOutlineButton";
import { Modal, ModalType } from "./UI/Modal/Modal";
import OnboardingTooltip from './UI/OnboardingTooltip/OnboardingTooltip';
import SuccessModal from './UI/Modal/SuccessModal/SuccessModal';
import ModalSpinner from './UI/Modal/ModalSpinner/ModalSpinner';

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

import TimeUp from './Customer/Modals/TimeUp/TimeUp';
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
    BiddingCard
    AddAdditionalSales,
    TimeUp,
    Onboarding,
    Categories
};
