import React from 'react';
import TipioCountdown from '../TipioCountdown/TipioCountdown';
import CalculateDescountPercentage from '../../Util/calculateDiscountPercentage';

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
    const rangeList = (tipio_offer && tipio_offer.offer_price_ranges) || [];

    let bestPrice = null;
    if (rangeList.length > 0) {
        bestPrice =
            parseInt(rangeList[0].price) < parseInt(rangeList[1].price)
                ? parseInt(rangeList[0].price)
                : parseInt(rangeList[1].price);
    }

    const displayDiscount = () => {
        const percentage = CalculateDescountPercentage(market_price, bestPrice);
        if (percentage < -14) {
            return percentage + '%';
        }
        return `Spar ${market_price - bestPrice} kr`;
    };

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
                        <span className="imageSlider__discount">{displayDiscount()}</span>
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
