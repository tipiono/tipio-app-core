import React from 'react';
import MediumPopularTipio from './MediumPopularTipio';
import SecondaryButton from '../Buttons/SecondaryButton';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const MediumPopularVotingTipio = (props) => {
    return (
        <MediumPopularTipio {...props}>
            <h6 className="mediumPopularTipio__content--interested">{props.join_count} interesserte!</h6>

            <div className="mediumPopularTipio__content__submit">
                {props.joined ? (
                    <SecondaryButton text="Del nå" onClick={props.shareOnClick} />
                ) : (
                    <SecondaryOutlineButton text="Få tilbudsvarsel" onClick={props.voteOnClick} />
                )}
            </div>
        </MediumPopularTipio>
    );
};

export default MediumPopularVotingTipio;
