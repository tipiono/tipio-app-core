import React from 'react';
import SmallPopularTipio from "./SmallPopularTipio";
import { useTranslation } from 'react-i18next';
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const SmallPopularBiddingTipioEdit = (props) => {
    const { t } = useTranslation();

    return (
        <SmallPopularTipio {...props}>
            <div className="smallPopularTipio__content__price">
                <h6 className="smallPopularTipio__content__price--marketprice">4 500 Kr</h6>
                <h6 className="smallPopularTipio__content__price--saleprice">2 500 Kr</h6>
            </div>

            <div className="smallPopularTipio__content__submit">
                <SecondaryOutlineButton text={t('admin.mainTipio.edit')} onClick={props.onClick}/>
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularBiddingTipioEdit;