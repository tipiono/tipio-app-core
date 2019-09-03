import React from 'react';
import { storiesOf } from '@storybook/react';
import SalesProgressBar from '../../../lib/Customer/SalesProgressBar/SalesProgressBar'


storiesOf('Customer/Components/SalesProgressBar', module)
    .add('SalesProgressBar', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBar percentage={25} />
            </div>
        </>
    )
