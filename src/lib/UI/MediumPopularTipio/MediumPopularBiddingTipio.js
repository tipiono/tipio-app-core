import React from 'react';
import MediumPopularTipio from './MediumPopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import SecondaryOutlineButton from '../Buttons/SecondaryButton';
import { getBestPrice } from '../../Util/calculateDiscountPercentage';

const MediumPopularBiddingTipio = (props) => {
    return (
        <MediumPopularTipio {...props}>
            <div className="mediumPopularTipio__content__price">
                <h6 className="mediumPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="mediumPopularTipio__content__price--saleprice">
                    {' '}
                    {getBestPrice(props.tipio_offer.offer_price_ranges).toLocaleString('nb-NO')} kr
                </h6>
            </div>

            <div className="mediumPopularTipio__content__submit">
                {props.binded ? (
                    <SecondaryOutlineButton text="Del nå" onClick={props.shareOnClick} />
                ) : (
                    <SecondaryButton text={'Se produkt'} onClick={props.bindOnClick} />
                )}
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularBiddingTipio;
