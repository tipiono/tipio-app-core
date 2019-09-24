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


    .add('Add Sale Card', () =>
        <>
            <div className="col-3 m-3">
                <AddSaleCompanyCard />
            </div>
        </>
    )

