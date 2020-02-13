import React from 'react';
import {useTranslation} from 'react-i18next';

import {
    TipioCountdown }
    from 'tipio-app-core';

const MediumPopularTipio = ({
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
        <div className="mediumPopularTipio">
            <div className="mediumPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="mediumPopularTipio__preview--image lazyload"
                    src="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329"
                    alt=""
                />
                <div className="mediumPopularTipio__preview--timeLeft">
                    <TipioCountdown className="timer" expires_in={binding_expires_in}/>
                </div>
            </div>

            <div className="mediumPopularTipio__content">
                <a href="" onClick={onClick}><h2 className="mediumPopularTipio__content--title">Productname</h2></a>
                <p className="mediumPopularTipio__content--description">Brandname</p>

                {children}
            </div>
        </div>
    );
};

export default MediumPopularTipio;