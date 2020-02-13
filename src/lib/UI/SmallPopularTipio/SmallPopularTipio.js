import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    TipioCountdown }
    from 'tipio-app-core';

const SmallPopularTipio = ({
                               children,
                               title,
                               binding_expires_in,
                               images,
                               brand,
                               type,
                               market_price,
                               new_price,
                               onClick
                           }) => {
    const {t} = useTranslation();

    return (

        <div className="smallPopularTipio">
            <div className="smallPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="smallPopularTipio__preview--image lazyload"
                    src="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329"
                    alt=""
                />
                <div className="smallPopularTipio__preview--timeLeft">
                    <TipioCountdown className="timer" expires_in={binding_expires_in}/>
                </div>
            </div>

            <div className="smallPopularTipio__content">
                <a href="" onClick={onClick}><h2 className="smallPopularTipio__content--title">Productname</h2></a>
                <p className="smallPopularTipio__content--description">Brandname</p>

                {children}
            </div>
        </div>
    );
};

export default SmallPopularTipio;