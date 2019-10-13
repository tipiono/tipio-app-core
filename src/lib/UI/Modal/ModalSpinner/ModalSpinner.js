import React from "react";
import {Modal} from '../Modal'

function ModalSpinner({title}) {
    return (
        <>
            <Modal>
               <div className="modalSpinner">
                   <div className="modalSpinner--size spinner-border text-secondary" role="status">
                       <span className="sr-only">Loading...</span>
                   </div>
                   <h3 className="modalSpinner--title">{title}</h3>
                </div>
            </Modal>
        </>
    )
}

export default ModalSpinner;
