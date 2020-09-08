import React from 'react';
import { CountdownType, PinkyCountdownSM } from '../../../index';
import cx from 'classnames';
import calculateDiscountPercentage from '../../../Util/calculateDiscountPercentage';

function SaleCard({
    image,
    title,
    salePrice,
    costPrice,
    children,
    expiresIn,
    onClick,
    sustainable,
    isValidTipio,
    ...props
}) {
    let saleDiscount = 0;
    if (props?.showOfferAsPercentage) {
        saleDiscount = `${calculateDiscountPercentage(parseInt(costPrice), parseInt(salePrice))}%`;
    } else {
        saleDiscount = `${parseInt(salePrice) - parseInt(costPrice)} kr`;
    }

    return (
        <>
            <div
                className={cx('saleCard', {
                    inActiveSaleCard: !isValidTipio
                })}
            >
                <div className="d-flex flex-row mb-4">
                    <a className="saleCard__preview lazy-image" href="" onClick={onClick}>
                        <img className="saleCard__preview--image lazyload" src={image} alt="" />
                        <span className="saleCard__preview--discount">{saleDiscount}</span>
                        {sustainable && (
                            <div className="saleCard__preview--sustainable">
                                <span>Bærekraftig</span>
                            </div>
                        )}
                    </a>
                    <div className="saleCard__content">
                        <div className="saleCard__content--price">
                            <h6 className="saleCard__content--price--sale">{salePrice} Kr</h6>
                            <h6 className="saleCard__content--price--cost">{costPrice} Kr</h6>
                        </div>
                        <a onClick={onClick}>
                            <h6 className="saleCard__content--title">{title}</h6>
                        </a>
                        <div className="saleCard__content--timeLeft">
                            <PinkyCountdownSM expires_in={expiresIn} type={CountdownType.PINK} />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}

export default SaleCard;
