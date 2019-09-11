import React from 'react';
import BaseCard from './BaseCard';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';
import SalesProgressBarTooltip from "../SalesProgressBarTooltip/SalesProgressBarTooltip";
import ShareButton from './ShareButton';
const BindingCard = ({ children, state, ...props }) => {
    return (
        <BaseCard {...props}>

            <ul className="list-inline">
                <li className="list-inline-item">2000 kr</li>
                <li className="list-inline-item">100 kr</li>
            </ul>

            <SalesProgressBarTooltip percentage={50} />

            {state !== 'bought' && <>
                <SecondaryOutlineButton text={'Add to cart'} />
            </>}

            {state === 'bought' && <>
                <ShareButton />
                <div>
                    See status!
                </div>
            </>}
        </BaseCard>
    )
};



export default BindingCard;
