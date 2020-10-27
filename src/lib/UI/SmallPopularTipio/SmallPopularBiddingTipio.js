import React from 'react';
import SmallPopularTipio from './SmallPopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import replaceWithSpace from '../../Util/replaceWithSpace';

const SmallPopularBiddingTipio = (props) => {
    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];

    return (
        <SmallPopularTipio {...props}>
            <div className="smallPopularTipio__content__price">
                <h6 className="smallPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="smallPopularTipio__content__price--saleprice">
                    {secondRange.price && replaceWithSpace(secondRange.price)} Kr
                </h6>
            </div>

            <div className="smallPopularTipio__content__submit">
                <SecondaryButton text={'Se produkt'} onClick={props.bindOnClick} />
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularBiddingTipio;
