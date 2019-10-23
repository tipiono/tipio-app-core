import React from "react";
import BaseCompanyCard from "../BaseCompanyCard/BaseCompanyCard";
import {SecondaryButton, SecondaryOutlineButton} from "../../../index";

function AddSaleCompanyCard({children, ...props}) {
    return (
        <>
            <BaseCompanyCard {...props}>
                {props.showAddAdditionalSaleButton && <SecondaryButton text={'Legg i handlekurv'}/>}
                {props.showSeeCustomerListButton ? (<SecondaryOutlineButton text={'Se kundeliste'}/>) : (null)}
            </BaseCompanyCard>

        </>
    )
}

export default AddSaleCompanyCard;
