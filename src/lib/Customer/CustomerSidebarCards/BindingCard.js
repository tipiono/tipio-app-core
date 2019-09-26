import React from 'react';
import BaseCard from './BaseCard';
import SecondaryButton from "../../UI/Buttons/SecondaryButton";
import SalesProgressBarTooltip from "../SalesProgressBarTooltip/SalesProgressBarTooltip";
import ShareButton from './ShareButton';
import HorizontalTimeline from "../Timelines/HorizontalTimeline";

const BindingCard = ({children, state, ...props}) => {
    return (
        <BaseCard {...props}>

            <ul className="customerSidebarCard__footer__salePrice">
                <li className="customerSidebarCard__footer__salePrice--minBuyers">
                    <h3 className="customerSidebarCard__footer__salePrice--minBuyers--price">2 490 Kr</h3>
                    <span className="customerSidebarCard__footer__salePrice--minBuyers--label">Pris fra 1-50 kjøp</span>
                </li>
                <li className="customerSidebarCard__footer__salePrice--maxBuyers">
                    <h3 className="customerSidebarCard__footer__salePrice--maxBuyers--price"> 1 990 Kr</h3>
                    <span className="customerSidebarCard__footer__salePrice--maxBuyers--label">Pris fra 51 kjøp</span>
                </li>
            </ul>

            <div className="customerSidebarCard__footer--progressBar">
                <SalesProgressBarTooltip percentage={50}/>
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
