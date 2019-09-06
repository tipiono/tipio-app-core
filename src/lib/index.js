import styles from './styles/main.scss';

/*
*   UI Components
* */
import TextInput from "./UI/TextInput/TextInput";
import Button from "./UI/Button/Button";
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
import ImageCropper from './Customer/Modals/ImageCropper/ImageCropper';
import JoinTipioOnboarding from './Customer/Modals/JoinTipioOnboarding/JoinTipioOnboarding';
import VerticalTimeline from './Customer/Modals/VerticalTimeline/VerticalTimeline';
import OnboardingMovie from './Customer/Modals/OnboardingMovie/OnboardingMovie';
import ReadyToBid from './Customer/Modals/ReadyToBid/ReadyToBid';
import ChooseCategory from './Customer/Modals/ChooseCategory/ChooseCategory';
import TimeUp from './Customer/Modals/TimeUp/TimeUp';
import Onboarding from './Customer/Modals/Onboarding/Onboarding';
import Categories from './Customer/Modals/ChooseCategory/Categories';

/*
*   Company Components
* */
import DeleteAccount from './Company/Modals/DeleteAccount/DeleteAccount';
import AddAdditionalSales from './Company/Modals/AddAdditionalSales/AddAdditionalSales';

export {
    styles,
    TextInput,
    Button,
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
    TimeUp,
    Onboarding,
    Categories
};
