import React, { Children } from 'react';
import { Modal } from '../Modal';
import cx from 'classnames';
import ConfirmedIcon from '../../Icons/ConfirmedIcon';

function SuccessModal({
    successTitle,
    successDescription,
    animationURL,
    videoURL,
    imageURL,
    customStyle,
    children,
    ...props
}) {
    const renderVideo = () => (
        <div className="successModal--video">
            <video autoplay="autoplay" loop muted playsinline>
                <source src={videoURL} type="video/mp4" />
                Nettleseren din støtter ikke videokoden.
            </video>
        </div>
    );

    const renderImage = () => <img className="successModal--animation" src={animationURL} alt="" />;

    const renderSvg = () => (
        <div className="successModal--animation">
            <ConfirmedIcon />
        </div>
    );

    return (
        <>
            <Modal {...props}>
                <div className={cx('successModal', customStyle)}>
                    {imageURL ? renderSvg() : videoURL ? renderVideo() : renderImage()}

                    <h3 className="successModal--title">{successTitle}</h3>
                    <p className="successModal--description">{successDescription}</p>

                    {children && children}
                </div>
            </Modal>
        </>
    );
}

export default SuccessModal;
