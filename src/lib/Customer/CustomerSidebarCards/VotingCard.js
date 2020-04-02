import React, { Component } from 'react';
import BaseCard from './BaseCard';
import ShareButton from './ShareButton';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';
import GrayOutlineButton from '../../UI/Buttons/GrayOutlineButton';

const VotingCard = ({ state, ...props }) => {
    return (
        <BaseCard {...props}>
            {state === 'display_interested_button' && (
                <>
                    <div className="customerSidebarCard__footer--action">
                        <SecondaryOutlineButton
                            text={'Meld interesse'}
                            onClick={props.voteOnClick}
                            loading={props.voteLoading}
                            id={props.id}
                        />
                    </div>
                    <p className="customerSidebarCard__footer--alert">Dette er ikke bindende</p>
                </>
            )}
            {state === 'interested' && (
                <div className="customerSidebarCard__footer--action">
                    <ShareButton onClick={props.shareOnClick} />
                    <div className="customerSidebarCard__footer--action--notInterested">
                        <GrayOutlineButton text="Meld av interesse" onClick={props.notInterestedOnClick} />
                    </div>
                </div>
            )}

            {props.meta.joined_count > 0 ? (
                <p className="customerSidebarCard__footer--interestedCounter">
                    Allerede {props.meta.joined_count} Interesserte!
                </p>
            ) : (
                ''
            )}
        </BaseCard>
    );
};

export default VotingCard;
