import React from 'react';
import LargePopularTipio from './LargePopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';

const LargePopularVotingTipioEdit = (props) => {
    return (
        <LargePopularTipio {...props}>
            <h6 className="largePopularTipio__content--interested">{props.count} interesserte!</h6>

            <div className="largePopularTipio__content__submit">
                <SecondaryButton text="Gi tilbud" onClick={props.onClick} />
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularVotingTipioEdit;
