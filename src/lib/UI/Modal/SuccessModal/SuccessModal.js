import React from "react";
import {Modal} from '../Modal'

function SuccessModal({successTitle, successDescription, animationURL, ...props}) {
    return (
        <>
            <Modal {...props}>
                <div className="successModal">
                    <img className="successModal--animation" src={animationURL} alt=""/>

                    <h3 className="successModal--title">{successTitle}</h3>
                    <p className="successModal--description">{successDescription}</p>
                </div>
            </Modal>
        </>
    )
}

export default SuccessModal;
