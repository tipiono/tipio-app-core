import React from 'react';
import TipioCountdown from '../TipioCountdown/TipioCountdown';
import { createDiscountLabel } from '../../Util/calculateDiscountPercentage';

function TipioOfTheDay({
    id,
    children,
    title,
    subtitle,
    voting_expires_in,
    images,
    onClick,
    showTimer,
    link,
    ...props
}) {
    return (
        <div className="tipioOfTheDay">
            <a href={link ? link : `/tipio/vote/${id}`} onClick={onClick} className="tipioOfTheDay__preview">
                <img
                    className="tipioOfTheDay__preview--image"
                    src={images && images.length && images[0].blob_url}
                    alt=""
                />
                {showTimer ||
                    (props.bindingTipio && (
                        <>
                            <span className="imageSlider__discount">
                                {createDiscountLabel(props.market_price, props.tipio_offer.price)}
                            </span>
                            <div className="tipioOfTheDay__preview--timeLeft">
                                <TipioCountdown
                                    className="timer"
                                    expires_in={props.bindingTipio ? props.binding_expires_in : voting_expires_in}
                                />
                            </div>
                        </>
                    ))}
            </a>

            <div className="tipioOfTheDay__content">
                <a href={`/tipio/vote/${id}`} className="tipioOfTheDay__content--title" onClick={onClick}>
                    {title}
                </a>

                <p className="tipioOfTheDay__content--description">{subtitle}</p>

                {children}
            </div>
        </div>
    );
}
export default TipioOfTheDay;
