import React from "react";
import {CountdownType, PinkyCountdownSM} from "../../../index";

function SaleCard({
    image,
    title,
    salePrice,
    costPrice,
    saleDiscount,
    children,
    expiresIn,
    onClick
}) {
    return (
        <>
            <div className="saleCard">
                <div className="d-flex flex-row mb-4">
                        <a className="saleCard__preview lazy-image" href="" onClick={onClick}>
                            <img className="saleCard__preview--image lazyload" src={image} alt=""/>
                            <span className="saleCard__preview--discount">{saleDiscount}</span>
                        </a>
                    <div className="saleCard__content">
                        <div className="saleCard__content--price">
                            <h6 className="saleCard__content--price--sale">{salePrice}</h6>
                            <h6 className="saleCard__content--price--cost">{costPrice}</h6>
                        </div>

                        <a onClick={onClick}><h6 className="saleCard__content--title">{title}</h6></a>

                        <div className="saleCard__content--timeLeft">
                            <PinkyCountdownSM expires_in={expiresIn} type={CountdownType.PINK}/>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default SaleCard;
