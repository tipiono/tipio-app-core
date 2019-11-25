import React from "react";
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";
import SalesProgressBar from "../../SalesProgressBar/SalesProgressBar";

function BiddingCard({
    image,
    title,
    description,
    expiresIn,
    salePrice,
    costPrice,
    children,
    salesProgressBarPercentage,
    bindingCount
}) {
    return (
        <>
            <div className="biddingCard">
                <div className="biddingCard__header">
                    <a href="" className="lazy-image biddingCard__header--preview">
                        <img className="lazyload biddingCard__header--preview--image"
                             data-src={image}
                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                             alt=""
                        />
                    </a>

                    <div className="biddingCard__header--timeLeft">
                        <TipioCountdown className="timer" expires_in={expiresIn}/>
                    </div>
                </div>

                <div className="biddingCard__body">
                    <div className="biddingCard__body--price">
                        <h4 className="biddingCard__body--price--sale">{salePrice}</h4>
                        <h4 className="biddingCard__body--price--cost">{costPrice}</h4>
                    </div>

                    <div className="biddingCard__body--content">
                        <h4 className="biddingCard__body--content--title">{title}</h4>
                        <p className="biddingCard__body--content--description">{description}</p>
                    </div>

                    <div className="biddingCard__body--salesbar">
                        <SalesProgressBar percentage={salesProgressBarPercentage} bindingCount={bindingCount} />
                    </div>
                    <div className="biddingCard__body--share">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BiddingCard;
