import React from "react";
import {Modal} from '../Modal'

function SuccessModal({successTitle, successDescription, animationURL, videoURL, ...props}) {
    const renderVideo = () => (
        <video poster={animationURL} playsinline="" autoPlay="" muted="" loop="">
            <source src={videoURL} type="video/mp4" />
        </video>
    );

    const renderImage = () => (
        <img className="successModal--animation" src={animationURL} alt=""/>
    );

    return (
        <>
            <Modal {...props}>
                <div className="successModal">
                    {videoURL ? renderVideo() : renderImage()}
                    <h3 className="successModal--title">{successTitle}</h3>
                    <p className="successModal--description">{successDescription}</p>
                </div>
            </Modal>
        </>
    )
}

export default SuccessModal;
