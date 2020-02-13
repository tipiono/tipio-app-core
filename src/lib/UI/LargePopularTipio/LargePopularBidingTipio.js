import React from 'react';
import LargePopularTipio from "./LargePopularTipio";
import SecondaryButton from "../Buttons/SecondaryButton";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";
import { useTranslation } from 'react-i18next';


const LargePopularBidingTipio = (props) => {
    const { t } = useTranslation();

    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const firstRange = rangeList.length > 0 && rangeList[0];
    // const secondRange = rangeList.length > 1 && parseInt(rangeList[1].price, 10) && rangeList[1];

    return (
        <LargePopularTipio {...props}>
            <div className="largePopularTipio__content__price">
                <h6 className="largePopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="largePopularTipio__content__price--saleprice">{firstRange.price} Kr</h6>
            </div>

            <div className="largePopularTipio__content__submit">
                {props.binded ? (
                    <SecondaryButton
                        text="Del nå"
                        onClick={props.shareOnClick}
                    />
                ) : (
                        <SecondaryOutlineButton
                            text="Legg i handlekurv"
                            onClick={props.bindOnClick}
                        />
                    )}
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularBidingTipio;