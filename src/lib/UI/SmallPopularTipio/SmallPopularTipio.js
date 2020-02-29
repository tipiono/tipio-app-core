import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    TipioCountdown
}
    from 'tipio-app-core';

const SmallPopularTipio = ({
    children,
    title,
    binding_expires_in,
    images,
    brand,
    type,
    onClick
}) => {
    const { t } = useTranslation();
    return (
        <div className="smallPopularTipio">
            <div className="smallPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="smallPopularTipio__preview--image lazyload"
                    src={images && images.length && images[0].blob_url}
                    alt=""
                />
                {
                    type === 2 && (
                        <div className="smallPopularTipio__preview--timeLeft">
                            <TipioCountdown className="timer" expires_in={binding_expires_in} />
                        </div>
                    )
                }
            </div>

            <div className="smallPopularTipio__content">
                <a href="" onClick={onClick} className="smallPopularTipio__content--title">{title}</a>
                <p className="smallPopularTipio__content--description">{brand}</p>

                {children}
            </div>
        </div>
    );
};

export default SmallPopularTipio;