import React from 'react';
import SmallPopularTipio from "./SmallPopularTipio";
import { useTranslation } from 'react-i18next';
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const SmallPopularVotingTipioEdit = (props) => {
    const { t } = useTranslation();
    return (
        <SmallPopularTipio {...props}>
            <h6 className="smallPopularTipio__content--interested">2 789 interesserte!</h6>

            <div className="smallPopularTipio__content__submit">
                <SecondaryOutlineButton text={t('admin.mainTipio.edit')} onClick={props.onClick}/>
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularVotingTipioEdit;