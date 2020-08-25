import React from 'react';
import MediumPopularTipio from './MediumPopularTipio';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const MediumPopularVotingTipioEdit = (props) => {
    return (
        <MediumPopularTipio {...props}>
            <h6 className="mediumPopularTipio__content--interested">{props.count} interesserte!</h6>

            <div className="mediumPopularTipio__content__submit">
                <SecondaryOutlineButton text="Rediger" onClick={props.onEditClick} />
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularVotingTipioEdit;
