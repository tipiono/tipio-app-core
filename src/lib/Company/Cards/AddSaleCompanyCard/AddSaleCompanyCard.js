import React from "react";
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";

function AddSaleCompanyCard({image, title, description, expiresIn, salePrice, costPrice, children}) {
    return (
        <>
            <div className="biddingCard">
                <div className="biddingCard__header">
                    <a href=""><img className="biddingCard__header--image" src={image} alt=""/></a>
                    <div className="biddingCard__header--timeLeft">
                        <TipioCountdown className="timer" expires_in={expiresIn}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddSaleCompanyCard;
