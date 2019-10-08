import React from "react";
import {Modal} from '../Modal'

function ModalSpinner({}) {
    return (
        <>
            <Modal>
               <div className="modalSpinner">
                   <div className="modalSpinner--size spinner-border text-secondary" role="status">
                       <span className="sr-only">Loading...</span>
                   </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalSpinner;
