import React from 'react';
import BaseCard from './BaseCard';
import SecondaryButton from "../../UI/Buttons/SecondaryButton";
import SalesProgressBarTooltip from "../SalesProgressBarTooltip/SalesProgressBarTooltip";
import ShareButton from './ShareButton';
import HorizontalTimeline from "../Timelines/HorizontalTimeline";

const BindingCard = ({children, state, firstRange, secondRange, ...props}) => {
    return (
        <BaseCard {...props}>
            <ul className="customerSidebarCard__footer__salePrice">
                {
                    firstRange ? (
                        <li className="customerSidebarCard__footer__salePrice--minBuyers">
                            <h3 className="customerSidebarCard__footer__salePrice--minBuyers--price">{firstRange.price} Kr</h3>
                            <span className="customerSidebarCard__footer__salePrice--minBuyers--label">Pris fra {firstRange.from}-{firstRange.to} kjøp</span>
                        </li>
                    ) : (null)
                }
                {
                    secondRange ? (
                        <li className="customerSidebarCard__footer__salePrice--maxBuyers">
                        <h3 className="customerSidebarCard__footer__salePrice--maxBuyers--price"> {secondRange.price} Kr</h3>
                        <span className="customerSidebarCard__footer__salePrice--maxBuyers--label">Pris fra {secondRange.to} kjøp</span>
                    </li>
                    ) : (null)
                }
            </ul>
            <div className="customerSidebarCard__footer--progressBar">
                <SalesProgressBarTooltip bindCount={props.bindCount} percentage={50}/>
            </div>
            {state !== 'bought' && <>
                <SecondaryButton text={'Legg i handlekurv'}/>
            </>}

            {state === 'bought' && <>
                <div className="customerSidebarCard__footer--action">
                    <ShareButton/>
                </div>

                <div className="customerSidebarCard__footer--timeline">
                    <HorizontalTimeline/>
                </div>
            </>}
        </BaseCard>
    )
};


export default BindingCard;
