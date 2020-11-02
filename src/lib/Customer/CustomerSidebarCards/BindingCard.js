import React from 'react';
import BaseCard from './BaseCard';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';

const BindingCard = ({
    children,
    state,
    firstRange,
    secondRange,
    onShareClick,
    onBindClick,
    bindingPercentage,
    onRestoreClick,
    isIceTipio,
    ...props
}) => {
    return (
        <BaseCard {...props}>
            {children}

            {props.expiredTipio && (
                <>
                    <SecondaryOutlineButton text={'Gjenopprett'} onClick={onRestoreClick} />
                    <p className="customerSidebarCard__footer--conditon">Dette er ikke bindende</p>
                </>
            )}
        </BaseCard>
    );
};

export default BindingCard;
