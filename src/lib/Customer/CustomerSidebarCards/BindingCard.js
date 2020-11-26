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
    onRestoreClick,
    bindCount,
    ...props
}) => {
    return (
        <BaseCard {...props}>
            {children}
            {props.expiredTipio && (
                <>
                    <SecondaryOutlineButton text={'Gjenopprett'} onClick={onRestoreClick} />
                </>
            )}
        </BaseCard>
    );
};

export default BindingCard;
