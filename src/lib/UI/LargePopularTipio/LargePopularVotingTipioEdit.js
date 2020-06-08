import React from 'react';
import LargePopularTipio from './LargePopularTipio';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const LargePopularVotingTipioEdit = (props) => {
    return (
        <LargePopularTipio {...props}>
            <h6 className="largePopularTipio__content--interested">{props.count} interesserte!</h6>

            <div className="largePopularTipio__content__submit">
                <SecondaryOutlineButton text="Rediger" onClick={props.onEditClick} />
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularVotingTipioEdit;
