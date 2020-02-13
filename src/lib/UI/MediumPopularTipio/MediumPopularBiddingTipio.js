import React from 'react';
import MediumPopularTipio from "./MediumPopularTipio";
import { useTranslation } from 'react-i18next';
import SecondaryButton from "../Buttons/SecondaryButton";
import SecondaryOutlineButton from "../Buttons/SecondaryButton";

const MediumPopularBiddingTipio = (props) => {
    const { t } = useTranslation();
    const rangeList = (props.tipio_offer && props.tipio_offer.offer_price_ranges) || [];
    const firstRange = rangeList.length > 0 && rangeList[0];
    // const secondRange = rangeList.length > 1 && parseInt(rangeList[1].price, 10) && rangeList[1];

    return (
        <MediumPopularTipio {...props}>
            <div className="mediumPopularTipio__content__price">
                <h6 className="mediumPopularTipio__content__price--marketprice">{props.market_price} Kr</h6>
                <h6 className="mediumPopularTipio__content__price--saleprice">{firstRange.price} Kr</h6>
            </div>

            <div className="mediumPopularTipio__content__submit">
                {props.binded ? (
                    <SecondaryOutlineButton
                        text="Del nå"
                        onClick={props.shareOnClick}
                    />
                ) : (
                        <SecondaryButton
                            text="Legg i handlekurv"
                            onClick={props.bindOnClick}
                        />
                    )}
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularBiddingTipio;