import React from 'react';
import Van from '../../static/assets/images/van.svg';

const ShippingReturns = () => {
    return (
        <div className="shippingReturns">
            <img className="shippingReturns__icon" src={Van} alt="" />
            <span className="shippingReturns__title">Gratis frakt og retur</span>
        </div>
    );
};

export default ShippingReturns;
