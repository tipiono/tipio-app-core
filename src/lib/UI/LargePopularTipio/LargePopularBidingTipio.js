import React from 'react';
import LargePopularTipio from './LargePopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import generatePrice from '../../Util/generatePrice';

const LargePopularBidingTipio = (props) => {
    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const firstRange = rangeList.length > 0 && parseInt(rangeList[1].price, 10) && rangeList[1];
    const secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];

    return (
        <LargePopularTipio {...props}>
            <div className="largePopularTipio__content__price">
                <h6 className="largePopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="largePopularTipio__content__price--saleprice">
                    {generatePrice(props.bind_count, firstRange, secondRange)} Kr
                </h6>
            </div>

            <div className="largePopularTipio__content__submit">
                {props.binded ? (
                    <SecondaryButton text="Del nå" onClick={props.shareOnClick} />
                ) : (
                    <SecondaryButton text="Legg i handlekurv" onClick={props.bindOnClick} />
                )}
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularBidingTipio;
