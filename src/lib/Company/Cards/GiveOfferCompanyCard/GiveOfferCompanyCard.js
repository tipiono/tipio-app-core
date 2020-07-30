import React from 'react';
import BaseCompanyCard from '../BaseCompanyCard/BaseCompanyCard';
import { SecondaryButton } from '../../../index';

const GiveOfferCompanyCard = (props) => {
    return (
        <div>
            <BaseCompanyCard {...props}>
                <SecondaryButton text={'Gi tilbud'} loading={props.loading} onClick={props.onClick} />
            </BaseCompanyCard>
        </div>
    );
};

export default GiveOfferCompanyCard;
