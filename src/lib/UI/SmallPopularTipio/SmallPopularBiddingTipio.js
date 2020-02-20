import React from 'react';
import SmallPopularTipio from "./SmallPopularTipio";
import SecondaryButton from "../Buttons/SecondaryButton";
import generatePrice from '../../Util/generatePrice';
import { useTranslation } from 'react-i18next';

const SmallPopularBiddingTipio = (props) => {
    const { t } = useTranslation();
    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const firstRange = rangeList.length > 0 && parseInt(rangeList[1].price, 10) && rangeList[1];
    const secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];

    return (
        <SmallPopularTipio {...props}>
            <div className="smallPopularTipio__content__price">
                <h6 className="smallPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="smallPopularTipio__content__price--saleprice">{generatePrice(props.bind_count, firstRange, secondRange)} Kr</h6>
            </div>

            <div className="smallPopularTipio__content__submit">
                <SecondaryButton
                    text="Legg i handlekurv"
                    onClick={props.bindOnClick}
                />
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularBiddingTipio;