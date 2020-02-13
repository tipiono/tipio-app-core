import React from 'react';
import {useTranslation} from 'react-i18next';
import MediumPopularTipio from "./MediumPopularTipio";
import SecondaryButton from "../Buttons/SecondaryButton";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const MediumPopularVotingTipio = (props) => {
    const { t } = useTranslation();

    return (
        <MediumPopularTipio {...props}>
            <h6 className="mediumPopularTipio__content--interested">2 789 interesserte!</h6>

            <div className="mediumPopularTipio__content__submit">
                {props.joined ? (
                    <SecondaryButton
                        text="Del nå"
                        onClick={props.shareOnClick}
                    />
                ) : (
                    <SecondaryOutlineButton
                        text="Meld interesse"
                        onClick={props.voteOnClick}
                    />
                )}
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularVotingTipio;