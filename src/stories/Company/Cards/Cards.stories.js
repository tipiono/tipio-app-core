import React from 'react';
import {storiesOf} from '@storybook/react';
import Checkbox from "../../../lib/UI/Forms/Checkbox";
import {
    OrderItemCard,
    AddSaleCompanyCard,
    CustomerListCompanyCard,
    GiveOfferCompanyCard,
    TipioWithOfferCompanyCard,
    AdditionalSaleCompanyCard,
} from '../../../lib';


storiesOf('Company/Components/Cards', module)

    .add('Add sale card', () =>
        <>
            <div className="col-3 m-3">
                <AddSaleCompanyCard />
            </div>
        </>
    )

    .add('See customer list card', () =>
        <>
            <div className="col-3 m-3">
                <CustomerListCompanyCard />
            </div>
        </>
    )


    .add('Give an offer card', () =>
        <>
            <div className="col-3 m-3">
                <GiveOfferCompanyCard />
            </div>
        </>
    )
    .add('Tipio with offer card', () =>
        <>
            <div className="col-3 m-3">
                <TipioWithOfferCompanyCard />
            </div>
        </>
    )

    .add('Add additional sale', () =>
        <>
            <div className="col-4 m-3">
                <AdditionalSaleCompanyCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/121/1562740066392"}
                    title={"Hakkebakkeskogen hettehåndkle 80x80 Bomullfrotte hvit"}
                    salePrice={"1 500 Kr"}
                    costPrice={"1 989 Kr"}
                    saleDiscount={"-30%"}
                />
            </div>
        </>
    )

    .add('Order item card', () =>
        <>
            <div className="m-3">
                <OrderItemCard />
            </div>
        </>
    )
