import React from 'react';
import TipioCountdown from '../../../UI/TipioCountdown/TipioCountdown';
import SalesProgressBar from '../../SalesProgressBar/SalesProgressBar';
import SecondaryButton from '../../../UI/Buttons/SecondaryButton';
import generatePrice from '../../../Util/generatePrice';
import calculateDiscountPercentage from '../../../Util/calculateDiscountPercentage';
import NafMembership from '../../../UI/Logo/NafMemberShip';
const SingleBiddingCard = ({
    image,
    title,
    brand,
    expiresIn,
    market_price,
    costPrice,
    salesProgressBarPercentage,
    bindingCount,
    onClick,
    id,
    hasNafMembership,
    saleDiscount,
    ...props
}) => {
    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const firstRange = rangeList.length > 0 && parseInt(rangeList[1].price, 10) && rangeList[1];
    const secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];

    let bindingPercentage = 0;
    if (rangeList.length) {
        const maxParticipantsRequired = rangeList.length > 1 ? rangeList[1].to : rangeList[0].to;
        bindingPercentage = 100 + calculateDiscountPercentage(maxParticipantsRequired, bindingCount);
    }

    return (
        <div className="singleBiddingCard">
            <div className="singleBiddingCard__header">
                {hasNafMembership && (
                    <div className="tipio__membership">
                        <NafMembership />
                    </div>
                )}
                <span className="imageSlider__discount">{saleDiscount}</span>
                <a
                    href={`/tipio/bind/${id}`}
                    className="lazy-image singleBiddingCard__header--preview"
                    onClick={onClick}
                >
                    <img className="lazyload singleBiddingCard__header--preview--image" src={image} alt="" />
                </a>
                <div className="singleBiddingCard__header--timeLeft">
                    <TipioCountdown className="timer" expires_in={expiresIn} />
                </div>
            </div>

            <div className="singleBiddingCard__body">
                <div className="singleBiddingCard__body--content">
                    <a onClick={onClick} href={`/tipio/bind/${id}`}>
                        <h2 className="singleBiddingCard__body--content--title">{title}</h2>
                    </a>
                    {brand && <h4 className="singleBiddingCard__body--content--description">{brand}</h4>}
                </div>

                <div className="singleBiddingCard__body--price">
                    <h3 className="singleBiddingCard__body--price--cost">{market_price} Kr</h3>
                    <h3 className="singleBiddingCard__body--price--sale">
                        {generatePrice(bindingCount, firstRange, secondRange)} Kr
                    </h3>
                </div>

                <div className="singleBiddingCard__body--salesbar">
                    {bindingCount ? (
                        <SalesProgressBar percentage={bindingPercentage} bindingCount={bindingCount} />
                    ) : (
                        ''
                    )}
                </div>
                <span className="singleBiddingCard__body--addToCart">
                    {props.binded ? (
                        <SecondaryButton text="Del nå" onClick={props.shareOnClick} />
                    ) : (
                        <SecondaryButton text="Legg i handlekurv" onClick={props.bindOnClick} />
                    )}
                    {/* <SecondaryButton text="Legg i handlekurv" /> */}
                </span>
            </div>
        </div>
    );
};

export default SingleBiddingCard;
