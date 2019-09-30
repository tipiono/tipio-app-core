import React from 'react';
import CompanySidebarBaseCard from "./CompanySidebarBaseCard";


const CompanyAddBidCard = (props) => {
    return (
        <div className="companyAddBidCard">
            <CompanySidebarBaseCard {...props}>

                {props.loading ? (<div className="placeholder-content">
                &nbsp;
                </div>) : (
                    <h6 className="companyAddBidCard--interested">987 påmeldte!</h6>
                )}

                <div className="companyAddBidCard__price">
                    <div className="companyAddBidCard__price--cost">
                        <p className="companyAddBidCard__price--cost--label">Markedspris</p>
                        <h6 className="companyAddBidCard__price--cost--amount">27 990 Kr</h6>
                    </div>

                    <span className="border-right" />

                    <div className="companyAddBidCard__price--sale">
                        <p className="companyAddBidCard__price--sale--label">Minimumpris</p>
                        <h6 className="companyAddBidCard__price--sale--amount">23 550 Kr</h6>
                    </div>
                </div>


            </CompanySidebarBaseCard>
        </div>
    );
};

export default CompanyAddBidCard;
