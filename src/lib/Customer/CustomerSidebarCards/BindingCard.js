import React from 'react';
import BaseCard from './BaseCard';
import cx from 'classnames';
import SalesProgressBarTooltip from '../SalesProgressBarTooltip/SalesProgressBarTooltip';
import ShareButton from './ShareButton';
import HorizontalTimeline from '../Timelines/HorizontalTimeline';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import SecondaryOutlineButton from '../../UI/Buttons/SecondaryOutlineButton';
import replaceWithSpace from '../../Util/replaceWithSpace';

const BindingCard = ({
    children,
    state,
    firstRange,
    secondRange,
    onShareClick,
    onBindClick,
    bindingPercentage,
    onRestoreClick,
    ...props
}) => {
    return (
        <BaseCard {...props}>
            <ul className="customerSidebarCard__footer__salePrice">
                {firstRange ? (
                    <li className="customerSidebarCard__footer__salePrice--minBuyers" id={props.minimumByersId}>
                        <h3
                            className={cx('customerSidebarCard__footer__salePrice--minBuyers--price', {
                                'customerSidebarCard__footer__salePrice--minBuyers--priceSmall':
                                    ('' + firstRange.price).length >= 5
                            })}
                        >
                            {replaceWithSpace(firstRange.price)} Kr
                        </h3>
                        <span className="customerSidebarCard__footer__salePrice--minBuyers--label">
                            Pris fra {firstRange.from}-{firstRange.to} kjøp
                        </span>
                    </li>
                ) : null}
                {secondRange ? (
                    <li className="customerSidebarCard__footer__salePrice--maxBuyers">
                        <h3
                            className={cx('customerSidebarCard__footer__salePrice--maxBuyers--price', {
                                'customerSidebarCard__footer__salePrice--maxBuyers--priceSmall':
                                    ('' + secondRange.price).length >= 5
                            })}
                        >
                            {' '}
                            {replaceWithSpace(secondRange.price)} Kr
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

            {children}

            {state !== 'bought' && !props.expiredTipio && (
                <>
                    <SecondaryButton text={'Legg i handlekurv'} onClick={onBindClick} />
                </>
            )}

            {state === 'bought' && !props.expiredTipio && (
                <>
                    <div className="customerSidebarCard__footer--action">
                        <ShareButton onClick={onShareClick} />
                    </div>

                    <div className="customerSidebarCard__footer--timeline">
                        <HorizontalTimeline {...props} />
                    </div>
                </>
            )}

            {props.expiredTipio && <SecondaryOutlineButton text={'Gjenopprett'} onClick={onRestoreClick} />}
        </BaseCard>
    );
};

export default BindingCard;
