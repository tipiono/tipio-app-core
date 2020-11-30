import React from 'react';
import BaseCard from './BaseCard';
import SalesProgressBarTooltip from '../SalesProgressBarTooltip/SalesProgressBarTooltip';
import replaceWithSpace from '../../Util/replaceWithSpace';
import calculateDiscountPercentage from '../../Util/calculateDiscountPercentage';

const JoinBindingCard = ({ children, maxParticipantsRequired, joinCount, ...props }) => {
    const percentage = 100 + calculateDiscountPercentage(maxParticipantsRequired, joinCount);
    return (
        <BaseCard {...props}>
            <div className="customerSidebarCard__price">
                <div className="customerSidebarCard__price--cost">
                    <h6 className="customerSidebarCard__price--cost--amount">
                        {props?.market_price && replaceWithSpace(props?.market_price)} Kr
                    </h6>
                    <p className="customerSidebarCard__price--cost--label">Førpris</p>
                </div>

                <div className="customerSidebarCard__price--sale">
                    <h6 className="customerSidebarCard__price--sale--amount">
                        {props?.price && replaceWithSpace(props.price)} Kr
                    </h6>
                    <p className="customerSidebarCard__price--cost--label">Gruppepris</p>
                </div>
            </div>
            <div className="customerSidebarCard__footer--progressBar">
                <SalesProgressBarTooltip
                    bindCount={joinCount}
                    percentage={percentage}
                    totalCount={maxParticipantsRequired}
                />
            </div>
            {children}
        </BaseCard>
    );
};

export default JoinBindingCard;
