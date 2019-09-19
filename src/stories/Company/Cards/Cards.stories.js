import React from 'react';
import {storiesOf} from '@storybook/react';
import {OrderItemCard, AddSaleCompanyCard} from '../../../lib';


storiesOf('Company/Components/Cards', module)

    .add('Order Item Card', () =>
        <>
            <div className="m-3">
                <OrderItemCard />
            </div>
        </>
    )


    .add('Add Sale', () =>
        <>
            <div className="col-3 m-3">
                <AddSaleCompanyCard
                image="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"
                />
            </div>
        </>
    )

