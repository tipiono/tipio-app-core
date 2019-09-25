import React from 'react';
import BaseCompanyCard from "../BaseCompanyCard/BaseCompanyCard";
import {SecondaryOutlineButton} from "../../../index";

const CustomerListCompanyCard = () => {
    return (
        <div>
            <BaseCompanyCard>
                <SecondaryOutlineButton text={'Se kundeliste'}/>
            </BaseCompanyCard>
        </div>
    );
};

export default CustomerListCompanyCard;
