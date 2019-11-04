import React from 'react';
import CompanySidebarBaseCard from "./CompanySidebarBaseCard";


const CompanyAddBidCard = (props) => {
    const { tipio, meta } = props;
    return (
        <div className="companyAddBidCard">
            <CompanySidebarBaseCard {...props}>

                {props.loading ? (
                    <div className="placeholder-content companyAddBidCard--placeholder mb-4">
                        &nbsp;
                    </div>
                ) : (
                    <h6 className="companyAddBidCard--interested">{meta.joined_count} påmeldte!</h6>
                )}

                <div className="companyAddBidCard__price">
                    <div className="companyAddBidCard__price--cost">
                        <p className="companyAddBidCard__price--cost--label">Markedspris</p>
                        <h6 className="companyAddBidCard__price--cost--amount">{tipio.market_price} Kr</h6>
                    </div>

                    <span className="border-right d-none d-md-block" />

                    <div className="companyAddBidCard__price--sale">
                        <p className="companyAddBidCard__price--sale--label" id={props.__onboardingMinimumPriceId || 'priceSale' }>Minimumpris</p>
                        <h6 className="companyAddBidCard__price--sale--amount">{tipio.wanted_price} Kr</h6>
                    </div>
                </div>
            </CompanySidebarBaseCard>
        </div>
    )
};

export default CompanyAddBidCard;
