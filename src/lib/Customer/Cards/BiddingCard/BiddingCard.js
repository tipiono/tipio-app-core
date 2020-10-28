import React from 'react';
import TipioCountdown from '../../../UI/TipioCountdown/TipioCountdown';
import SalesProgressBar from '../../SalesProgressBar/SalesProgressBar';
import replaceWithSpace from '../../../Util/replaceWithSpace';
import CalculateDescountPercentage from '../../../Util/calculateDiscountPercentage';

function BiddingCard({
    id,
    image,
    title,
    brand,
    expiresIn,
    salePrice,
    costPrice,
    children,
    salesProgressBarPercentage,
    bindingCount,
    onClick,
    bindHasExpired,
    link
}) {
    const displayDiscount = () => {
        const percentage = CalculateDescountPercentage(costPrice, salePrice);
        if (percentage < -14) {
            return percentage + '%';
        }
        return `Spar ${costPrice - salePrice} kr`;
    };
    return (
        <>
            <div className="biddingCard">
                <div className="biddingCard__header">
                    <a
                        href={link ? link : `/tipio/bind/${id}`}
                        className="lazy-image biddingCard__header--preview"
                        onClick={onClick}
                    >
                        <img
                            className="lazyload biddingCard__header--preview--image"
                            data-src={image}
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                            alt=""
                        />
                    </a>
                    {expiresIn && (
                        <>
                            <span className="imageSlider__discount">{displayDiscount()}</span>
                            <div className="biddingCard__header--timeLeft">
                                <TipioCountdown className="timer" expires_in={expiresIn} />
                            </div>
                        </>
                    )}
                </div>

                <div className="biddingCard__body">
                    <div className="biddingCard__body--price">
                        <h4 className="biddingCard__body--price--sale">
                            {salePrice && replaceWithSpace(salePrice)} Kr
                        </h4>
                        <h4 className="biddingCard__body--price--cost">
                            {costPrice && replaceWithSpace(costPrice)} Kr
                        </h4>
                    </div>

                    <div className="biddingCard__body--content">
                        <a onClick={onClick} href={`/tipio/bind/${id}`}>
                            <h4 className="biddingCard__body--content--title">{title}</h4>
                        </a>
                        {brand && <p className="biddingCard__body--content--description">{brand.toUpperCase()}</p>}
                    </div>

                    <div className="biddingCard__body--salesbar">
                        {!bindHasExpired &&
                            (bindingCount > 0 ? (
                                <>
                                    <SalesProgressBar
                                        percentage={salesProgressBarPercentage}
                                        bindingCount={bindingCount}
                                    />
                                </>
                            ) : (
                                ''
                            ))}
                    </div>
                    <div className="biddingCard__body--share">{children}</div>
                </div>
            </div>
        </>
    );
}

export default BiddingCard;
