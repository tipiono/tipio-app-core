import React from 'react';
import {useTranslation} from 'react-i18next';
import MediumPopularTipio from "./MediumPopularTipio";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const MediumPopularVotingTipioEdit = (props) => {
    const { t } = useTranslation();

    return (
        <MediumPopularTipio {...props}>
            <h6 className="mediumPopularTipio__content--interested">2 789 interesserte!</h6>

            <div className="mediumPopularTipio__content__submit">
                <SecondaryOutlineButton text={t('admin.mainTipio.edit')} onClick={props.onClick}/>
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularVotingTipioEdit;