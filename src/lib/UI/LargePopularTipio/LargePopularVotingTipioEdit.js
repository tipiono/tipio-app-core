import React from 'react';
import LargePopularTipio from "./LargePopularTipio";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";

const LargePopularVotingTipioEdit = (props) => {
    return (
        <LargePopularTipio {...props}>
            <h6 className="largePopularTipio__content--interested">2 789 interesserte!</h6>

            <div className="largePopularTipio__content__submit">
                <SecondaryOutlineButton text="Edit"/>
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularVotingTipioEdit;