import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    TipioCountdown
} from 'tipio-app-core';

const LargePopularTipio = ({
    children,
    title,
    subtitle,
    binding_expires_in,
    images,
    brand,
    onClick,
    voteOnClick,
    shareOnClick,
    has_offer,
    joined,
}) => {
    const { t } = useTranslation();
    return (
        <div className="largePopularTipio">
            <div className="largePopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="largePopularTipio__preview--image lazyload"
                    data-src={images && images.length && images[0].blob_url}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                    alt=""
                />
                {
                    has_offer && (
                        <div className="largePopularTipio__preview--timeLeft">
                            <TipioCountdown className="timer" expires_in={binding_expires_in} />
                        </div>
                    )
                }
            </div>

            <div className="largePopularTipio__content">
                <a href="" onClick={onClick} className="largePopularTipio__content--title">{title}</a>
                <a href="" className="largePopularTipio__content--description">{subtitle}</a>

                {children}
            </div>
        </div>
    );
};

export default LargePopularTipio;