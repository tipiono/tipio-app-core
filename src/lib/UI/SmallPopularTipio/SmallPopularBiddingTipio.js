import React from 'react';
import SmallPopularTipio from './SmallPopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import replaceWithSpace from '../../Util/replaceWithSpace';

const SmallPopularBiddingTipio = (props) => {
    return (
        <SmallPopularTipio {...props}>
            <div className="smallPopularTipio__content__price">
                <h6 className="smallPopularTipio__content__price--marketprice">
                    {props.market_price && replaceWithSpace(props.market_price)} Kr
                </h6>
                <h6 className="smallPopularTipio__content__price--saleprice">
                    {props?.tipio_offer?.price && replaceWithSpace(props?.tipio_offer?.price)} Kr
                </h6>
            </div>

            <div className="smallPopularTipio__content__submit">
                <SecondaryButton text={'Se produkt'} onClick={props.bindOnClick} />
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularBiddingTipio;
