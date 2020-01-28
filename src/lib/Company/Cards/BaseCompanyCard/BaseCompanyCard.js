import React from 'react';
import TipioCountdown from "../../../UI/TipioCountdown/TipioCountdown";

const BaseCompanyCard = ({ children, expires_in, binding_count, potential_earning, showBindingCount, ...props }) => {
    console.log('potential_earning: ' + potential_earning);
    console.log('binding_count ' + binding_count);
    return (
        <div>
            <div className="baseCompanyCard">
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    props.onClick()
                }}>
                    <div className="baseCompanyCard__header">
                        {props.images && props.images.length &&
                            <a href="" className="lazy-image baseCompanyCard__header--preview">
                                <img className="lazyload baseCompanyCard__header--preview--image"
                                    data-src={props.images[0].blob_url}
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                                    alt="" /></a>}
                        <div className="baseCompanyCard__header--timeLeft">
                            <TipioCountdown className="timer" expires_in={expires_in} />
                        </div>
                    </div>
                </a>

                <div className="baseCompanyCard__body">
                    <a href="#" onClick={() => {
                        props.onClick()
                    }}><h5 className="baseCompanyCard__body--title">{props.title}</h5></a>
                    <p className="baseCompanyCard__body--description">{props.subtitle}</p>

                    <div className="baseCompanyCard__body--cost">
                        <h3 className="baseCompanyCard__body--cost--price">{potential_earning} Kr</h3>
                        <span className="baseCompanyCard__body--cost--label">Potensiell omsetning</span>
                    </div>

                    <div className="baseCompanyCard__body--interested">
                        <h6 className="baseCompanyCard__body--interested--counter">{binding_count} {showBindingCount ? 'kjøpte' : 'påmeldte'} ! </h6>
                    </div>

                    {children}

                </div>
            </div>
        </div>
    );
};

export default BaseCompanyCard;
