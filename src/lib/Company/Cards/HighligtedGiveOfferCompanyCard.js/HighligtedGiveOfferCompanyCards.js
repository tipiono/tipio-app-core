import React from 'react';
import { SecondaryOutlineButton } from '../../../index';

const HighligtedGiveOfferCompanyCards = ({
    children,
    brand,
    binding_count,
    link,
    forceLoad = false,
    title,
    onClick,
    ...props
}) => {
    return (
        <div className="highligtedGiveOfferCompanyCards">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {props.images && props.images.length && (
                <a href={link} className="highligtedGiveOfferCompanyCards__preview lazy-image" onClick={onClick}>
                    <img
                        className="highligtedGiveOfferCompanyCards__preview--image lazyload"
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
            <div className="highligtedGiveOfferCompanyCards__content">
                <a href={link} onClick={onClick}>
                    <h1 className="highligtedGiveOfferCompanyCards__content--title">{title}</h1>
                </a>
                <p className="highligtedGiveOfferCompanyCards__content--brand">{!brand ? props.subtitle : brand}</p>
                {binding_count > 0 && (
                    <div className="highligtedGiveOfferCompanyCards__content--interested">
                        <h5 className="highligtedGiveOfferCompanyCards__content--interested--counter">
                            {binding_count} interesserte!
                        </h5>
                    </div>
                )}
                <div className="highligtedGiveOfferCompanyCards__content--button">
                    <SecondaryOutlineButton text={'Git tilbud'} onClick={onClick} />
                </div>
            </div>
        </div>
    );
};

export default HighligtedGiveOfferCompanyCards;
