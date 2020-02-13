import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    TipioCountdown
} from 'tipio-app-core';

const LargePopularTipio = ({
                               children,
                               title,
                               binding_expires_in,
                               images,
                               brand,
                               onClick,
                               voteOnClick,
                               shareOnClick,
                               joined,
                           }) => {

    const { t } = useTranslation();
    return (
        <div className="largePopularTipio">
            <div className="largePopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="largePopularTipio__preview--image lazyload"
                    src="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329"
                    alt=""
                />

                <div className="largePopularTipio__preview--timeLeft">
                    <TipioCountdown className="timer" expires_in={binding_expires_in}/>
                </div>
            </div>

            <div className="largePopularTipio__content">
                <a href="" onClick={onClick}><h1 className="largePopularTipio__content--title">Knall tilbud!</h1></a>
                <a href="" className="largePopularTipio__content--description">Paloma utemøbler - Hageland</a>

                {children}
            </div>
        </div>
    );
};

export default LargePopularTipio;