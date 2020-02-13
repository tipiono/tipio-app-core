import React from 'react';
import MediumPopularTipio from "./MediumPopularTipio";
import {useTranslation} from 'react-i18next';
import SecondaryButton from "../Buttons/SecondaryButton";

const MediumPopularBiddingTipio = (props) => {
    const { t } = useTranslation();

    return (
        <MediumPopularTipio {...props}>
            <div className="mediumPopularTipio__content__price">
                <h6 className="mediumPopularTipio__content__price--marketprice">4 500 Kr</h6>
                <h6 className="mediumPopularTipio__content__price--saleprice">2 500 Kr</h6>
            </div>

            <div className="mediumPopularTipio__content__submit">
                <SecondaryButton text="Legg i handlekurv" />
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularBiddingTipio;