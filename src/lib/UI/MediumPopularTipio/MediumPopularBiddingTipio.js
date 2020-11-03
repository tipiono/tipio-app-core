import React from 'react';
import MediumPopularTipio from './MediumPopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import SecondaryOutlineButton from '../Buttons/SecondaryButton';
import replaceWithSpace from '../../Util/replaceWithSpace';

const MediumPopularBiddingTipio = (props) => {
    return (
        <MediumPopularTipio {...props}>
            <div className="mediumPopularTipio__content__price">
                <h6 className="mediumPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="mediumPopularTipio__content__price--saleprice">
                    {' '}
                    {props?.tipio_offer?.price && replaceWithSpace(props.tipio_offer.price)} Kr
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
