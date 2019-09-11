import React, {Component} from 'react';
import BaseCard from './BaseCard';
import ShareButton from './ShareButton';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';

const VotingCard = ({ children, state }) => {
    return (
        <BaseCard>
            {
                state !== 'interested' && (
                    <>
                      <SecondaryOutlineButton text={'Show interest'} />
                        <small>Dette er ikke bindende</small>
                    </>
                )
            }
            {state === 'interested' && <ShareButton />}
            <div>
                Allerede 221 Interesserte!
            </div>
        </BaseCard>
    )
};



export default VotingCard;
