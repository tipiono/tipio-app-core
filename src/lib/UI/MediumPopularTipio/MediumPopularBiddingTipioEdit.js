import React from 'react';
import MediumPopularTipio from './MediumPopularTipio';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const MediumPopularBiddingTipioEdit = (props) => {
    return (
        <MediumPopularTipio {...props}>
            <div className="mediumPopularTipio__content__price">
                <h6 className="mediumPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="mediumPopularTipio__content__price--saleprice">{props.offer_price} Kr</h6>
            </div>

            <div className="mediumPopularTipio__content__submit">
                <SecondaryOutlineButton text="Rediger" onClick={props.onEditClick} />
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularBiddingTipioEdit;
