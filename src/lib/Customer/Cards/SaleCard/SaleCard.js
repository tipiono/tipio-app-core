import React from "react";
// import {date} from "@storybook/addon-knobs";
import {CountdownType, PinkyCountdownSM} from "../../../index";

function SaleCard({image, title, salePrice, costPrice, saleDiscount, children, defaultValue}) {
    return (
        <>
            <div className="saleCard">
                <div className="d-flex flex-row mb-4">
                    <div className="saleCard__preview">
                        <a className="saleCard__preview--image" href="">
                            <img className="img-fluid" src={image} alt=""/>
                            <span className="saleCard__preview--discount">{saleDiscount}</span>
                        </a>
                    </div>
                    <div className="saleCard__content">
                        <div className="saleCard__content--price">
                            <h6 className="saleCard__content--price--sale">{salePrice}</h6>
                            <h6 className="saleCard__content--price--cost">{costPrice}</h6>
                        </div>

                        <h6 className="saleCard__content--title">{title}</h6>

                        <div className="saleCard__content--timeLeft">
                            {/* <PinkyCountdownSM expires_in={date(defaultValue)} type={CountdownType.PINK}/> */}
                        </div>
                    </div>
                </div>

                {children}

            </div>
        </>
    )
}

export default SaleCard;
