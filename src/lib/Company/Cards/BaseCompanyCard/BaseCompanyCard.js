import React from 'react';
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";

const BaseCompanyCard = ({children, expires_in, ...props}) => {
    return (
        <div>
            <div className="baseCompanyCard">
                <div className="baseCompanyCard__header">
                    {props.images && props.images.length && <a href=""><img className="baseCompanyCard__header--image"
                                    src={props.images[0].blob_url}
                                    alt=""/></a>}
                    <div className="baseCompanyCard__header--timeLeft">
                        <TipioCountdown className="timer" expires_in={props.voting_expires_in}/>
                    </div>
                </div>

                <div className="baseCompanyCard__body">
                    <h5 className="baseCompanyCard__body--title">{props.title}</h5>
                    <p className="baseCompanyCard__body--content--description">{props.subtitle}</p>

                    <div className="baseCompanyCard__body--cost">
                        <h3 className="baseCompanyCard__body--cost--price">1 199 000 Kr</h3>
                        <span className="baseCompanyCard__body--cost--label">Potensiell omsetning</span>
                    </div>

                    <div className="baseCompanyCard__body--interested">
                        <h6 className="baseCompanyCard__body--interested--counter">220 påmeldte!</h6>
                    </div>

                    {children}

                </div>
            </div>
        </div>
    );
};

export default BaseCompanyCard;
