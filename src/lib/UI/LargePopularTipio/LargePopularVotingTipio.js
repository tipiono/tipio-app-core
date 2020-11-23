import React from 'react';
import LargePopularTipio from './LargePopularTipio';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const LargePopularVotingTipio = (props) => {
    return (
        <LargePopularTipio {...props}>
            <h6 className="largePopularTipio__content--interested">{props.join_count} interesserte!</h6>

            <div className="largePopularTipio__content__submit">
                {props.joined ? (
                    <SecondaryButton text="Del nå" onClick={props.shareOnClick} />
                ) : (
                    <SecondaryOutlineButton text="Få tilbudsvarsel" onClick={props.voteOnClick} />
                )}
            </div>
        </LargePopularTipio>
    );
};

export default LargePopularVotingTipio;
