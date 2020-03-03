import React, { Children } from "react";
import {Modal} from '../Modal';
import ConfirmedIcon from "../../Icons/ConfirmedIcon";


function SuccessModal({successTitle, successDescription, animationURL, videoURL, imageURL, children, ...props}) {
    const renderVideo = () => (
        <video poster={animationURL} playsinline="" autoPlay="" muted="" loop="">
            <source src={videoURL} type="video/mp4" />
        </video>
    );

    const renderImage = () => (
        <img className="successModal--animation" src={animationURL} alt=""/>
    );

    const renderSvg = () => (
        <div className="successModal--animation"><ConfirmedIcon /></div>
    );

    console.log(animationURL)
    return (
        <>
            <Modal {...props}>
                <div className="successModal">
                    {
                        imageURL ? renderSvg() :(videoURL ? renderVideo() : renderImage())
                    }

                    <h3 className="successModal--title">{successTitle}</h3>
                    <p className="successModal--description">{successDescription}</p>

                    {children && children}
                </div>
            </Modal>
        </>
    )
}

export default SuccessModal;
