import React from 'react';
import SmallPopularTipio from './SmallPopularTipio';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const SmallPopularBiddingTipioEdit = (props) => {
    return (
        <SmallPopularTipio {...props}>
            <div className="smallPopularTipio__content__price">
                <h6 className="smallPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="smallPopularTipio__content__price--saleprice">{props.offer_price} Kr</h6>
            </div>

            <div className="smallPopularTipio__content__submit">
                <SecondaryOutlineButton text="Rediger" onClick={props.onEditClick} />
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularBiddingTipioEdit;
