import React from "react";
import {Modal} from '../Modal'

function SuccessModal({successTitle, successDescription, ...props}) {
    return (
        <>
            <Modal {...props}>
                <div className="successModal">
                    <img className="successModal--animation" src="https://tipio.ams3.digitaloceanspaces.com/staging/public/020s0040_1280x1280_wAlpha.gif" alt=""/>

                    <h3 className="successModal--title">{successTitle}</h3>
                    <p className="successModal--description">{successDescription}</p>
                </div>
            </Modal>
        </>
    )
}

export default SuccessModal;
