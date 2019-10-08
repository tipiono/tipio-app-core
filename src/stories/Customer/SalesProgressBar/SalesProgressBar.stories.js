import React from 'react';
import { storiesOf } from '@storybook/react';
import SalesProgressBar from '../../../lib/Customer/SalesProgressBar/SalesProgressBar'
import SalesProgressBarTooltip from "../../../lib/Customer/SalesProgressBarTooltip/SalesProgressBarTooltip";


storiesOf('Customer/Components/SalesProgressBar', module)
    .add('SalesProgressBar', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBar percentage={25} />
            </div>
        </>
    )
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
