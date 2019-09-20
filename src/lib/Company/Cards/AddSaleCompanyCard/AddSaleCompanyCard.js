import React from "react";
import BaseCompanyCard from "../BaseCompanyCard/BaseCompanyCard";
import {SecondaryButton, SecondaryOutlineButton} from "../../../index";

function AddSaleCompanyCard({children, ...props}) {
    return (
        <>
            <BaseCompanyCard>
                <SecondaryButton text={'Legg i handlekurv'}/>
                <SecondaryOutlineButton text={'Se kundeliste'}/>
            </BaseCompanyCard>

        </>
    )
}

export default AddSaleCompanyCard;
