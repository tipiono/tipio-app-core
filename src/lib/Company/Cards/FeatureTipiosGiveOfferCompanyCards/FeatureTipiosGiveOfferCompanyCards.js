import React from 'react';
import TipioCountdown from '../../../UI/TipioCountdown/TipioCountdown';
import { SecondaryButton } from '../../../index';
const FeatureTipiosCompanyCards = ({ expires_in, brand, binding_count, forceLoad = false, link, ...props }) => {
    return (
        <div>
            <div className="featureTipiosCompanyCards">
                <span
                    onClick={(e) => {
                        e.preventDefault();
                        props.onClick();
                    }}
                >
                    <div className="featureTipiosCompanyCards__header">
                        {props.images && props.images.length && (
                            <a href={link} className="lazy-image featureTipiosCompanyCards__header--preview">
                                <img
                                    className="lazyload featureTipiosCompanyCards__header--preview--image lazyload"
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
                        <div className="featureTipiosCompanyCards__header--timeLeft">
                            <TipioCountdown className="timer" expires_in={expires_in} />
                        </div>
                    </div>
                </span>

                <div className="featureTipiosCompanyCards__body">
                    <a
                        href={link}
                        onClick={() => {
                            props.onClick();
                        }}
                    >
                        <h3 className="featureTipiosCompanyCards__body--productName">{props.title}</h3>
                    </a>
                    <p className="featureTipiosCompanyCards__body--brand">{!brand ? props.subtitle : brand}</p>
                    {binding_count > 0 && (
                        <div className="featureTipiosCompanyCards__body--interested">
                            <h5 className="featureTipiosCompanyCards__body--interested--counter">
                                {binding_count} interesserte!
                            </h5>
                        </div>
                    )}

                    <SecondaryButton text={'Git tilbud'} loading={props.loading} onClick={props.onClick} />
                </div>
            </div>
        </div>
    );
};

export default FeatureTipiosCompanyCards;
