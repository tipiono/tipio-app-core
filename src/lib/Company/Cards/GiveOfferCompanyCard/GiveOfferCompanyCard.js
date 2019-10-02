import React from 'react';
import BaseCompanyCard from "../BaseCompanyCard/BaseCompanyCard";
import {SecondaryButton} from "../../../index";

const GiveOfferCompanyCard = (props) => {
    return (
        <div>
            <BaseCompanyCard {...props}>
                <SecondaryButton text={'Gi tilbud'} {...props} />
            </BaseCompanyCard>
        </div>
    );
};

export default GiveOfferCompanyCard;
