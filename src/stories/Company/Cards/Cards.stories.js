import React from 'react';
import {storiesOf} from '@storybook/react';
import Checkbox from "../../../lib/UI/Forms/Checkbox";
import {
    OrderItemCard,
    AddSaleCompanyCard,
    CustomerListCompanyCard,
    GiveOfferCompanyCard,
    TipioWithOfferCompanyCard,
    ChooseAddSaleCompanyCard,
    AddMoreSaleCompanyCard,
    AddMoreSaleEndedCompanyCard,
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

    .add('Choose additional sale', () =>
        <>
            <div className="col-4 m-3">
                <ChooseAddSaleCompanyCard
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
    );

storiesOf('Company/Components/Cards/Add more sale card', module)

    .add('Add more sale card', () =>
        <>
            <div className="col-3 m-3">
                <AddMoreSaleCompanyCard />
            </div>
        </>
    )

    .add('Add more sale ended', () =>
        <>
            <div className="col-4 m-3">
                <AddMoreSaleEndedCompanyCard />
            </div>
        </>
    )
