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
    salesProgressBarPercentage
}) {
    return (
        <>
            <div className="biddingCard">
                <div className="biddingCard__header">
                    <a href=""><img className="biddingCard__header--image" src={image} alt=""/></a>
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
                        <SalesProgressBar percentage={salesProgressBarPercentage}/>
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
