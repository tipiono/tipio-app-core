import React from 'react';
import LargePopularTipio from './LargePopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';

const LargePopularBidingTipioEdit = (props) => {
    return (
        <LargePopularTipio {...props}>
            <div className="largePopularTipio__content__price">
                <h6 className="largePopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="largePopularTipio__content__price--saleprice">{props.offer_price} Kr</h6>
            </div>

            <div className="largePopularTipio__content__submit">
                <SecondaryButton text="Rediger" onClick={props.onClick} />
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularBidingTipioEdit;
