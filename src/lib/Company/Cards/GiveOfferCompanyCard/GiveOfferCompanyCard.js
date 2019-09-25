import React from 'react';
import BaseCompanyCard from "../BaseCompanyCard/BaseCompanyCard";
import {SecondaryButton} from "../../../index";

const GiveOfferCompanyCard = () => {
    return (
        <div>
            <BaseCompanyCard>
                <SecondaryButton text={'Gi tilbud'}/>
            </BaseCompanyCard>
        </div>
    );
};

export default GiveOfferCompanyCard;
