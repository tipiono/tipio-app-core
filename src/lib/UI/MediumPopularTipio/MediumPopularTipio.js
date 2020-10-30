import React from 'react';
import TipioCountdown from '../TipioCountdown/TipioCountdown';
import { createDiscountLabel } from '../../Util/calculateDiscountPercentage';

const MediumPopularTipio = ({
    id,
    children,
    title,
    binding_expires_in,
    images,
    brand,
    type,
    onClick,
    market_price,
    tipio_offer
}) => {
    return (
        <div className="mediumPopularTipio">
            <div className="mediumPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="mediumPopularTipio__preview--image lazyload"
                    src={images && images.length && images[0].blob_url}
                    alt=""
                />
                {type === 2 && (
                    <>
                        <span className="imageSlider__discount">
                            {createDiscountLabel(market_price, tipio_offer.offer_price_ranges)}
                        </span>
                        <div className="mediumPopularTipio__preview--timeLeft">
                            <TipioCountdown className="timer" expires_in={binding_expires_in} />
                        </div>
                    </>
                )}
            </div>

            <div className="mediumPopularTipio__content">
                <a
                    href={`/tipio/${type === 2 ? 'bind' : 'vote'}/${id}`}
                    onClick={onClick}
                    className="text-truncate mediumPopularTipio__content--title"
                    title={title}
                >
                    {title}
                </a>
                <p className="text-truncate mediumPopularTipio__content--description" title={brand}>
                    {brand}
                </p>

                {children}
            </div>
        </div>
    );
};

export default MediumPopularTipio;
