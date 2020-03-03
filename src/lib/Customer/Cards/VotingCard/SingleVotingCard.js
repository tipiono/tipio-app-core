import React from 'react';
import SecondaryOutlineButton from "../../../UI/Buttons/SecondaryOutlineButton";

const SingleVotingCard = ({ title,
    brand,
    image,
    joinCount,
    expiresIn,
    onClick,
    joined,
    shareOnClick,
    voteOnClick
}) => {
    return (
        <div className="singleVotingCard">
            <div className="singleVotingCard__header">
                <a className="lazy-image singleVotingCard__header--preview" href="/" onClick={onClick}>
                    <img className="lazyload singleVotingCard__header--preview--image"
                        src={image}
                        alt=""
                    />
                </a>
            </div>

            <div className="singleVotingCard__body">
                <div className="singleVotingCard__body--content">
                    <a onClick={onClick} href="/">
                        <h5 className="singleVotingCard__body--content--title">
                            {title}
                        </h5>
                    </a>
                    {brand &&
                        <h4 className="singleVotingCard__body--content--description">{brand}</h4>
                    }
                </div>

                <h3 className="singleVotingCard__body--content--interested">{joinCount} interesserte</h3>

                <span className="singleVotingCard__body--showInterese">
                    {joined ? (
                        <SecondaryOutlineButton
                            text="Del nå"
                            onClick={shareOnClick}
                        />
                    ) : (
                            <SecondaryOutlineButton
                                text="Meld interesse"
                                onClick={voteOnClick}
                            />
                        )}
                </span>
            </div>
        </div>
    );
};

export default SingleVotingCard;