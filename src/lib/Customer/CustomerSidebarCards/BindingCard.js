import React from 'react';
import BaseCard from './BaseCard';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';
import replaceWithSpace from '../../Util/replaceWithSpace';

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
    const isNotActive = true;
    return (
        <BaseCard {...props}>
            {props.inventory && props.inventory > 0 && props.inventory <= 10 && !props.expiredTipio ? (
                <p className="customerSidebarCard__header__stock">Kun {props.inventory} igjen</p>
            ) : (
                ''
            )}
            <div className="customerSidebarCard__price">
                <div className="customerSidebarCard__price--cost">
                    <h6 className="customerSidebarCard__price--cost--amount">
                        {props?.market_price && replaceWithSpace(props?.market_price)} Kr
                    </h6>
                </div>

                <div className="customerSidebarCard__price--sale">
                    <h6 className="customerSidebarCard__price--sale--amount">
                        {props?.price && replaceWithSpace(props.price)} Kr
                    </h6>
                </div>
            </div>
            {props.expiredTipio && (
                <div className="mt-4">
                    <SecondaryOutlineButton text={'Gjenopprett'} onClick={onRestoreClick} />
                </div>
            )}
            {isNotActive && <></>}
            {children}
        </BaseCard>
    );
};

export default BindingCard;
