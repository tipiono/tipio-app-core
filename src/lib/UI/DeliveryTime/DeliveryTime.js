import React from 'react';
import deliverytime from "../../static/assets/images/deliverytime.svg";

const DeliveryTime = ({ estimate }) => {
    const periods = {
        1: 'virkedager',
        2: 'uker',
        3: 'månder'
    }
    return (
        <>
            {
                estimate && (
                    <div className="deliveryTime">
                        <img className="deliveryTime__icon" src={deliverytime} alt="" />
                        <span className="deliveryTime__title">
                            {`Levering i løpet av ${estimate.from} - ${estimate.to} ${periods[estimate.period]}`}
                        </span>
                    </div>
                )
            }
        </>
    );
};

export default DeliveryTime;