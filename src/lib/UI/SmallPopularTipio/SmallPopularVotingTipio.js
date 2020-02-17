import React from 'react';
import SmallPopularTipio from "./SmallPopularTipio";
import { useTranslation } from 'react-i18next';
import SecondaryButton from "../Buttons/SecondaryButton";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const SmallPopularVotingTipio = (props) => {
    const { t } = useTranslation();

    return (
        <SmallPopularTipio {...props}>
            <h6 className="smallPopularTipio__content--interested">{props.join_count} interesserte!</h6>

            <div className="smallPopularTipio__content__submit">
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
        </SmallPopularTipio>
    );
};

export default SmallPopularVotingTipio;