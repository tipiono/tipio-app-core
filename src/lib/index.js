import styles from './styles/main.scss';

/*
*   UI Components
* */
import TextInput from "./UI/TextInput/TextInput";
import Button from "./UI/Button/Button";
import { Modal, ModalType } from "./UI/Modal/Modal";
import OnboardingTooltip from './UI/OnboardingTooltip/OnboardingTooltip';

/*
*   Customer/Private Components
* */
import TipioWithOffer from './Customer/Modals/TipioWithOffer/TipioWithOffer';
import TipioConfirmation from './Customer/Modals/TipioConfirmation/TipioConfirmation';


/*
*   Company Components
* */


export {
    styles,
    TextInput,
    Button,
    Modal,
    ModalType,
    OnboardingTooltip,
    TipioWithOffer,
    TipioConfirmation
};
