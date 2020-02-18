import React from 'react';
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";
import SalesProgressBar from "../../SalesProgressBar/SalesProgressBar";
import SecondaryButton from "../../../UI/Buttons/SecondaryButton";

function SingleBiddingCard({
                               image,
                               title,
                               brand,
                               expiresIn,
                               salePrice,
                               costPrice,
                               salesProgressBarPercentage,
                               bindingCount,
                               onClick
                           }) {
    return (
        <div className="singleBiddingCard">
            <div className="singleBiddingCard__header">
                <a href="" className="lazy-image singleBiddingCard__header--preview" onClick={onClick}>
                    <img className="lazyload singleBiddingCard__header--preview--image"
                         src="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329"
                         alt=""
                    />
                </a>

                <div className="singleBiddingCard__header--timeLeft">
                    <TipioCountdown className="timer" expires_in={expiresIn}/>
                </div>
            </div>

            <div className="singleBiddingCard__body">
                <div className="singleBiddingCard__body--content">
                    <a onClick={onClick} href="#"><h2 className="singleBiddingCard__body--content--title">Paloma
                        utemøbler</h2></a>
                    <h4 className="singleBiddingCard__body--content--description">Ballerud hagesenter</h4>
                </div>

                <div className="singleBiddingCard__body--price">
                    <h3 className="singleBiddingCard__body--price--cost">38 890 Kr</h3>
                    <h3 className="singleBiddingCard__body--price--sale">22 900 Kr</h3>
                </div>

                <div className="singleBiddingCard__body--salesbar">
                    <SalesProgressBar percentage={salesProgressBarPercentage}
                                      bindingCount={bindingCount}/>
                </div>
                <span className="singleBiddingCard__body--addToCart">
                    <SecondaryButton text="Legg i handlekurv"/>
                </span>
            </div>
        </div>
    );
};

export default SingleBiddingCard;