import React, {Component} from 'react';
import BaseCard from './BaseCard';
import ShareButton from './ShareButton';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';

const VotingCard = ({children, state}) => {
    return (
        <BaseCard>
            {
                state !== 'interested' && (
                    <>
                        <div className="sidebarCard__footer--action">
                            <SecondaryOutlineButton text={'Meld interesse'}/>
                        </div>
                        <p className="sidebarCard__footer--alert">Dette er ikke bindende</p>

                    </>
                )
            }
            {state === 'interested' &&
            <div className="sidebarCard__footer--action">
                <ShareButton/>
            </div>}

            <p className="sidebarCard__footer--interestedCounter">Allerede 221 Interesserte!</p>

        </BaseCard>
    )
};


export default VotingCard;
