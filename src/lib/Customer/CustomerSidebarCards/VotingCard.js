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
                        <div className="customerSidebarCard__footer--action">
                            <SecondaryOutlineButton text={'Meld interesse'}/>
                        </div>
                        <p className="customerSidebarCard__footer--alert">Dette er ikke bindende</p>

                    </>
                )
            }
            {state === 'interested' &&
            <div className="customerSidebarCard__footer--action">
                <ShareButton/>
            </div>}

            <p className="customerSidebarCard__footer--interestedCounter">Allerede 221 Interesserte!</p>

        </BaseCard>
    )
};


export default VotingCard;
