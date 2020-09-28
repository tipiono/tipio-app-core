import React from 'react';
import BaseCompanyCard from '../BaseCompanyCard/BaseCompanyCard';

const TipioWithOfferCompanyCard = ({ children, ...props }) => {
    return (
        <div>
            <BaseCompanyCard {...props}>{children}</BaseCompanyCard>
        </div>
    );
};

export default TipioWithOfferCompanyCard;
