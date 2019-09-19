import React from 'react';
import {storiesOf} from '@storybook/react';
import {OrderItemCard, ToggleSwitch} from '../../../lib';


storiesOf('Company/Components/Cards', module)

    .add('Order Item Card', () =>
        <>
            <div className="m-3">
                <OrderItemCard />
            </div>
        </>
    )
