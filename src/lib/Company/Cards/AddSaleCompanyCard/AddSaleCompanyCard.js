import React from "react";
import BaseCompanyCard from "../BaseCompanyCard/BaseCompanyCard";
import {SecondaryButton, SecondaryOutlineButton} from "../../../index";

function AddSaleCompanyCard({children, ...props}) {
    return (
        <>
            <BaseCompanyCard {...props}>
                {props.showAddAdditionalSaleButton && <SecondaryButton onClick={props.addAdditionalSalesOnClick} text={'Legg til mersalg'}/>}
                {props.showSeeCustomerListButton ? (<SecondaryOutlineButton onClick={props.seeCustomerListOnClick} text={'Se kundeliste'}/>) : (null)}
            </BaseCompanyCard>

        </>
    )
}

export default AddSaleCompanyCard;
