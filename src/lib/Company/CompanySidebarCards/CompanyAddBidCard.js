import React from 'react';
import CompanySidebarBaseCard from "./CompanySidebarBaseCard";
import generatePrice from '../../Util/generatePrice';

const CompanyAddBidCard = (props) => {

    const { tipio, meta, showMinimumPrice, showNewPrice, showBindingCount,showOfferPrice,firstRange,secondRange } = props;

    return (
        <div className="companyAddBidCard">
            <CompanySidebarBaseCard {...props}>

                {props.loading ? (
                    <div className="placeholder-content companyAddBidCard--placeholder mb-4">
                        &nbsp;
                    </div>
                ) : (
                    <h6 className="companyAddBidCard--interested">{meta.joined_count} {showBindingCount ? 'kjøpte' : 'påmeldte'}</h6>
                )}

                <div className="companyAddBidCard__price">
                    <div className="companyAddBidCard__price--cost">
                        <p className="companyAddBidCard__price--cost--label">Markedspris</p>
                        <h6 className="companyAddBidCard__price--cost--amount">{tipio.market_price} Kr</h6>
                    </div>

                    <span className="border-right d-none d-md-block" />

                    <div className="companyAddBidCard__price--sale">
                        {showMinimumPrice && (<>
                            <p className="companyAddBidCard__price--sale--label" id={props.__onboardingMinimumPriceId || 'priceSale' }>Minimumpris</p>
                            <h6 className="companyAddBidCard__price--sale--amount">{meta.minimum_price} Kr</h6>
                        </>)}
                        {showNewPrice && (<>
                            <p className="companyAddBidCard__price--sale--label" id={props.__onboardingMinimumPriceId || 'priceSale' }>Ny pris</p>
                            <h6 className="companyAddBidCard__price--sale--amount">{tipio.new_price} Kr</h6>
                        </>)}
                        {showOfferPrice && (<>
                            <p className="companyAddBidCard__price--sale--label" id={props.__onboardingMinimumPriceId || 'priceSale' }>Ditt tilbud</p>
                            <h6 className="companyAddBidCard__price--sale--amount">{generatePrice(meta.joined_count, firstRange, secondRange)} Kr</h6>
                        </>)}
                    </div>
                </div>
            </CompanySidebarBaseCard>
        </div>
    )
};

export default CompanyAddBidCard;
