import React from 'react';
import deliverytime from "../../static/assets/images/deliverytime.svg";

const DeliveryTime = () => {
    return (
        <div className="deliveryTime">
            <img className="deliveryTime__icon" src={deliverytime} alt=""/>
            <span className="deliveryTime__title">Levering i løpet av 1-4 virkedager</span>
        </div>
    );
};

export default DeliveryTime;