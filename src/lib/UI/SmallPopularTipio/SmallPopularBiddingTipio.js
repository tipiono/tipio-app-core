import React from 'react';
import SmallPopularTipio from "./SmallPopularTipio";
import { useTranslation } from 'react-i18next';
import SecondaryButton from "../Buttons/SecondaryButton";

const SmallPopularBiddingTipio = (props) => {
    const { t } = useTranslation();

    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const firstRange = rangeList.length > 0 && rangeList[0];

    return (
        <SmallPopularTipio {...props}>
            <div className="smallPopularTipio__content__price">
                <h6 className="smallPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="smallPopularTipio__content__price--saleprice">{firstRange.price} Kr</h6>
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