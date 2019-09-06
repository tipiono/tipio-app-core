import React from "react";

function VotingCard({image, interestedCounter}) {
    return (
        <>
            <div className="votingCard">
                <div className="votingCard__header">
                    <a href=""><img className="votingCard__header--image" src={image} alt=""/></a>
                </div>

                <div className="votingCard__body">
                    <div className="votingCard__body--interested">
                        <h3 className="votingCard__body--interested--counter">{interestedCounter}</h3>
                        <p className="votingCard__body--interested--label">Interesserte!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingCard;
