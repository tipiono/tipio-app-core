import React from 'react';
import TipioCountdown from '../../../UI/TipioCountdown/TipioCountdown';
import cx from 'classnames';

const BaseCompanyCard = ({
    children,
    expires_in,
    brand,
    binding_count,
    potential_earning,
    showRevenue,
    showBindingCount,
    forceLoad = false,
    sustainable,
    link,
    timmerRight,
    ...props
}) => {
    const showBrand = props.showBrand || false;
    const showLabel = () => {
        if (props.showVotingCount) return 'votes';
        return showBindingCount ? 'kjøpte' : 'påmeldte';
    };
    return (
        <div>
            <div className="baseCompanyCard">
                <span
                    onClick={(e) => {
                        e.preventDefault();
                        props.onClick();
                    }}
                >
                    <div className="baseCompanyCard__header">
                        {props.images && props.images.length && (
                            <a href={link} className="lazy-image baseCompanyCard__header--preview">
                                <img
                                    className="lazyload baseCompanyCard__header--preview--image"
                                    data-src={props.images[0].blob_url}
                                    src={
                                        !forceLoad
                                            ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                                            : props.images[0].blob_url
                                    }
                                    alt=""
                                />
                            </a>
                        )}

                        <div className="timeleft__countdown">
                            <TipioCountdown className="timer" expires_in={expires_in} />
                        </div>
                        {sustainable && (
                            <div className="baseCompanyCard__header--sustainable">
                                <span>Bærekraftig</span>
                            </div>
                        )}
                    </div>
                </span>

                <div className="baseCompanyCard__body">
                    <a
                        href={link}
                        onClick={() => {
                            props.onClick();
                        }}
                    >
                        <h5 className="baseCompanyCard__body--title">{props.title}</h5>
                    </a>
                    <p className="baseCompanyCard__body--description">{!showBrand ? props.subtitle : brand}</p>

                    <div className="baseCompanyCard__body--cost">
                        <h3 className="baseCompanyCard__body--cost--price">{potential_earning} Kr</h3>
                        <span className="baseCompanyCard__body--cost--label">
                            {showRevenue ? 'Omstening' : 'Potensiell omsetning'}
                        </span>
                    </div>
                    {binding_count > 0 && (
                        <div className="baseCompanyCard__body--interested">
                            <h6 className="baseCompanyCard__body--interested--counter">
                                {binding_count} {showLabel()} !{' '}
                            </h6>
                        </div>
                    )}

                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseCompanyCard;
