import React from "react";
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";

function VotingCard({image, interestedCounter, title, description, expiresIn, children}) {
    return (
        <>
            <div className="votingCard">
                <div className="votingCard__header">
                    <a className="lazy-image votingCard__header--preview" href="">
                        <img className="lazyload votingCard__header--preview--image"
                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                             data-src={image}
                             alt=""
                        />
                    </a>

                    <div className="votingCard__header--timeLeft">
                        <TipioCountdown className="timer" expires_in={expiresIn}/>
                    </div>
                </div>

                <div className="votingCard__body">
                    <div className="votingCard__body--interested">
                        <h3 className="votingCard__body--interested--counter">{interestedCounter}</h3>
                        <p className="votingCard__body--interested--label">Interesserte!</p>
                    </div>

                    <div className="votingCard__body--content">
                        <h5 className="votingCard__body--content--title">{title}</h5>
                        <p className="votingCard__body--content--description">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default VotingCard;
