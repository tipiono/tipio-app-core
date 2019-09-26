import React from 'react';
import CategoriesForm from './CategoriesForm';
import {Modal, ModalType} from '../../../UI/Modal/Modal'

function Categories (props) {
    return (
        <Modal
            type={ModalType.XLARGE}
            onCloseButtonClick={props.onClose}
            appendCenteredClass={false}
        >
            <CategoriesForm {...props} />
        </Modal>
    );
}
export default Categories;

