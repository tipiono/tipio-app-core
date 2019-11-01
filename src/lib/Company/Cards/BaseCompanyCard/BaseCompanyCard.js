import React from 'react';
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";

const BaseCompanyCard = ({children, expires_in, binding_count, potential_earning, ...props}) => {
    return (
        <div>
            <div className="baseCompanyCard">
                <a href="#" onClick={(e) => {e.preventDefault();props.onClick()}}>
                    <div className="baseCompanyCard__header">
                        {props.images && props.images.length && <a href=""><img className="baseCompanyCard__header--image"
                                        src={props.images[0].blob_url}
                                        alt=""/></a>}
                        <div className="baseCompanyCard__header--timeLeft">
                            <TipioCountdown className="timer" expires_in={expires_in}/>
                        </div>
                    </div>
                </a>

                <div className="baseCompanyCard__body">
                    <a href="#" onClick={() => {props.onClick()}}><h5 className="baseCompanyCard__body--title">{props.title}</h5></a>
                    <p className="baseCompanyCard__body--content--description">{props.subtitle}</p>

                    {potential_earning ? (<div className="baseCompanyCard__body--cost">
                        <h3 className="baseCompanyCard__body--cost--price">{potential_earning} Kr</h3>
                        <span className="baseCompanyCard__body--cost--label">Potensiell omsetning</span>
                    </div>) : (null)}

                    {binding_count > 0 ? (<div className="baseCompanyCard__body--interested">
                        <h6 className="baseCompanyCard__body--interested--counter">{binding_count} påmeldte!</h6>
                    </div>): (null)}

                    {children}

                </div>
            </div>
        </div>
    );
};

export default BaseCompanyCard;
