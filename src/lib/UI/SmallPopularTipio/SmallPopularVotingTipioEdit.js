import React from 'react';
import SmallPopularTipio from './SmallPopularTipio';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const SmallPopularVotingTipioEdit = (props) => {
    return (
        <SmallPopularTipio {...props}>
            <h6 className="smallPopularTipio__content--interested">{props.count} interesserte!</h6>

            <div className="smallPopularTipio__content__submit">
                <SecondaryOutlineButton text="Gi tilbud" onClick={props.onClick} />
            </div>
        </SmallPopularTipio>
    );
};

export default SmallPopularVotingTipioEdit;
