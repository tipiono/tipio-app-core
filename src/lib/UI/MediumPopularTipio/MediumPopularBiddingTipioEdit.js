import React from 'react';
import {useTranslation} from 'react-i18next';
import MediumPopularTipio from "./MediumPopularTipio";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const MediumPopularBiddingTipioEdit = (props) => {
    const { t } = useTranslation();

    return (
        <MediumPopularTipio {...props}>
            <div className="mediumPopularTipio__content__price">
                <h6 className="mediumPopularTipio__content__price--marketprice">4 500 Kr</h6>
                <h6 className="mediumPopularTipio__content__price--saleprice">2 500 Kr</h6>
            </div>

            <div className="mediumPopularTipio__content__submit">
                <SecondaryOutlineButton text={t('admin.mainTipio.edit')} onClick={props.onClick}/>
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularBiddingTipioEdit;