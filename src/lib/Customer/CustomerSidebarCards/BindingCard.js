import React from 'react';
import BaseCard from './BaseCard';
import SalesProgressBarTooltip from '../SalesProgressBarTooltip/SalesProgressBarTooltip';
import ShareButton from './ShareButton';
import HorizontalTimeline from '../Timelines/HorizontalTimeline';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';

const BindingCard = ({
    children,
    state,
    firstRange,
    secondRange,
    onShareClick,
    onBindClick,
    bindingPercentage,
    ...props
}) => {
    return (
        <BaseCard {...props}>
            <ul className="customerSidebarCard__footer__salePrice">
                {firstRange ? (
                    <li className="customerSidebarCard__footer__salePrice--minBuyers" id={props.minimumByersId}>
                        <h3 className="customerSidebarCard__footer__salePrice--minBuyers--price">
                            {firstRange.price} Kr
                        </h3>
                        <span className="customerSidebarCard__footer__salePrice--minBuyers--label">
                            Pris fra {firstRange.from}-{firstRange.to} kjøp
                        </span>
                    </li>
                ) : null}
                {secondRange ? (
                    <li className="customerSidebarCard__footer__salePrice--maxBuyers">
                        <h3 className="customerSidebarCard__footer__salePrice--maxBuyers--price">
                            {' '}
                            {secondRange.price} Kr
                        </h3>
                        <span className="customerSidebarCard__footer__salePrice--maxBuyers--label">
                            Pris fra {secondRange.from}-{secondRange.to} kjøp
                        </span>
                    </li>
                ) : null}
            </ul>

            {props.bindCount > 0 && (
                <div className="customerSidebarCard__footer--progressBar">
                    <SalesProgressBarTooltip bindCount={props.bindCount} percentage={bindingPercentage} />
                </div>
            )}

            {state !== 'bought' && (
                <>
                    <SecondaryButton text={'Legg i handlekurv'} onClick={onBindClick} />
                </>
            )}

            {state === 'bought' && (
                <>
                    <div className="customerSidebarCard__footer--action">
                        <ShareButton onClick={onShareClick} />
                    </div>

                    <div className="customerSidebarCard__footer--timeline">
                        <HorizontalTimeline {...props} />
                    </div>
                </>
            )}
        </BaseCard>
    );
};

export default BindingCard;
