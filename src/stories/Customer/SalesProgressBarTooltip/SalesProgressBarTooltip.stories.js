import React from 'react';
import { storiesOf } from '@storybook/react';
import SalesProgressBarTooltip from '../../../lib/Customer/SalesProgressBarTooltip/SalesProgressBarTooltip'


storiesOf('Customer/Components/SalesProgressBarTooltip', module)
    .add('SalesProgressBarTooltip', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBarTooltip percentage={25} />
            </div>
        </>
    )
    .add('SalesProgressBarTooltip with different percentage', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBarTooltip percentage={50} />
            </div>
        </>
    )
