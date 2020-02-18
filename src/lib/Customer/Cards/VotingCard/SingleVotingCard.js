import React from 'react';
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";
import SecondaryOutlineButton from "../../../UI/Buttons/SecondaryOutlineButton";

function SingleVotingCard({image, interestedCounter, title, brand, expiresIn, children, onClick}) {
    return (
        <div className="singleVotingCard">
            <div className="singleVotingCard__header">
                <a className="lazy-image singleVotingCard__header--preview" href="" onClick={onClick}>
                    <img className="lazyload singleVotingCard__header--preview--image"
                         src="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329"
                         alt=""
                    />
                </a>

                <div className="singleVotingCard__header--timeLeft">
                    <TipioCountdown className="timer" expires_in={expiresIn}/>
                </div>
            </div>

            <div className="singleVotingCard__body">
                <div className="singleVotingCard__body--content">
                    <a onClick={onClick} href="#"><h5 className="singleVotingCard__body--content--title">Oxford Blue
                        Linen</h5></a>
                    <h4 className="singleVotingCard__body--content--description">Varsity headwear</h4>
                </div>

                <h3 className="singleVotingCard__body--content--interested">2 890 interesserte</h3>

                <span className="singleVotingCard__body--showInterese">
                    <SecondaryOutlineButton text="Meld interesse"/>
                </span>
            </div>
        </div>
    );
};

export default SingleVotingCard;