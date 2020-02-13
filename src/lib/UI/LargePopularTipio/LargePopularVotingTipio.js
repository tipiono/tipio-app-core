import React from 'react';
import { useTranslation } from 'react-i18next';
import LargePopularTipio from "./LargePopularTipio";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";
import SecondaryButton from "../Buttons/SecondaryButton";

const LargePopularVotingTipio = (props) => {
    const { t } = useTranslation();

    return (
        <LargePopularTipio {...props}>
            <h6 className="largePopularTipio__content--interested">2 789 interesserte!</h6>

            <div className="largePopularTipio__content__submit">
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
        </LargePopularTipio>
    );
};

export default LargePopularVotingTipio;