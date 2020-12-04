import React from 'react';
import BaseCard from './BaseCard';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';
import SalesProgressBarTooltip from '../SalesProgressBarTooltip/SalesProgressBarTooltip';
import calculateDiscountPercentage from '../../Util/calculateDiscountPercentage';

const BindingCard = ({
    children,
    state,
    firstRange,
    secondRange,
    onShareClick,
    onBindClick,
    onRestoreClick,
    maxBindCount,
    joinCount,
    ...props
}) => {
    const percentage = 100 + calculateDiscountPercentage(maxBindCount, joinCount);

    return (
        <BaseCard {...props}>
            {maxBindCount && (
                <div className="customerSidebarCard__footer--progressBar">
                    <SalesProgressBarTooltip bindCount={joinCount} percentage={percentage} totalCount={maxBindCount} />
                </div>
            )}
            {props.expiredTipio && (
                <div className="mt-4">
                    <SecondaryOutlineButton text={'Gjenopprett'} onClick={onRestoreClick} />
                </div>
            )}
            {children}
        </BaseCard>
    );
};
export default BindingCard;
