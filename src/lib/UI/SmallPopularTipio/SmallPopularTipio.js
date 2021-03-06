import React from 'react';
import TipioCountdown from '../TipioCountdown/TipioCountdown';
import { createDiscountLabel } from '../../Util/calculateDiscountPercentage';
import NafMembership from '../Logo/NafMemberShip';
const SmallPopularTipio = ({
    id,
    children,
    title,
    binding_expires_in,
    images,
    brand,
    subtitle,
    type,
    onClick,
    hasNafMembership,
    ...props
}) => {
    return (
        <div className="smallPopularTipio">
            <div className="smallPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="smallPopularTipio__preview--image lazyload"
                    src={images && images.length && images[0].blob_url}
                    alt=""
                />
                {type === 2 && (
                    <>
                        {' '}
                        <span className="imageSlider__discount">
                            {props.tipio_offer?.price &&
                                createDiscountLabel(props.market_price, props.tipio_offer?.price)}
                        </span>
                        <div className="timeleft__countdown">
                            <TipioCountdown className="timer" expires_in={binding_expires_in} />
                        </div>
                    </>
                )}
                {hasNafMembership && (
                    <div className="tipio__membership">
                        <NafMembership />
                    </div>
                )}
            </div>

            <div className="smallPopularTipio__content">
                <div className="smallPopularTipio__content--inner">
                    {' '}
                    <a
                        href={`/tipio/${type === 2 ? 'bind' : 'vote'}/${id}`}
                        onClick={onClick}
                        className="smallPopularTipio__content--title"
                        title={title}
                    >
                        {title}
                    </a>
                    <p className="smallPopularTipio__content--description" title={brand ? brand : subtitle}>
                        {brand ? brand : subtitle}{' '}
                    </p>
                </div>
                <div className="smallPopularTipio__content--children">{children}</div>
            </div>
        </div>
    );
};

export default SmallPopularTipio;
