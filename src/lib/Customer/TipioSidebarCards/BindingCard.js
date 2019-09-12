import React from 'react';
import BaseCard from './BaseCard';
import SecondaryButton from "../../UI/Buttons/SecondaryButton";
import SalesProgressBarTooltip from "../SalesProgressBarTooltip/SalesProgressBarTooltip";
import ShareButton from './ShareButton';
import HorizontalTimeline from "../Timelines/HorizontalTimeline";

const BindingCard = ({children, state, ...props}) => {
    return (
        <BaseCard {...props}>

            <ul className="sidebarCard__footer__salePrice">
                <li className="sidebarCard__footer__salePrice--minBuyers">
                    <h3 className="sidebarCard__footer__salePrice--minBuyers--price">2 490 Kr</h3>
                    <span className="sidebarCard__footer__salePrice--minBuyers--label">Pris fra 1-50 kjøp</span>
                </li>
                <li className="sidebarCard__footer__salePrice--maxBuyers">
                    <h3 className="sidebarCard__footer__salePrice--maxBuyers--price"> 1 990 Kr</h3>
                    <span className="sidebarCard__footer__salePrice--maxBuyers--label">Pris fra 51 kjøp</span>
                </li>
            </ul>

            <div className="sidebarCard__footer--progressBar">
                <SalesProgressBarTooltip percentage={50}/>
            </div>


            {state !== 'bought' && <>
                <SecondaryButton text={'Legg i handlekurv'}/>
            </>}

            {state === 'bought' && <>
                <div className="sidebarCard__footer--action">
                    <ShareButton/>
                </div>

                <div className="sidebarCard__footer--timeline">
                    <HorizontalTimeline/>
                </div>


            </>}
        </BaseCard>
    )
};


export default BindingCard;
