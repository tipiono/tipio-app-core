import React from 'react';
import LargePopularTipio from './LargePopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import replaceWithSpace from '../../Util/replaceWithSpace';

const LargePopularBidingTipio = (props) => {
    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];
    const price = secondRange.price;
    const hasOptions = props?.tipio_offer?.tipio_offer_options && props?.tipio_offer?.tipio_offer_options?.length !== 0;

    return (
        <LargePopularTipio {...props}>
            <div className="largePopularTipio__content__price">
                <h6 className="largePopularTipio__content__price--marketprice">
                    {props.market_price && replaceWithSpace(props.market_price)} Kr
                </h6>
                <h6 className="largePopularTipio__content__price--saleprice">{price && replaceWithSpace(price)} Kr</h6>
            </div>

            <div className="largePopularTipio__content__submit">
                {props.binded ? (
                    <SecondaryButton text="Del nå" onClick={props.shareOnClick} />
                ) : (
                    <SecondaryButton
                        text={hasOptions ? 'Se produkt' : 'Legg i handlekurv'}
                        onClick={props.bindOnClick}
                    />
                )}
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularBidingTipio;
