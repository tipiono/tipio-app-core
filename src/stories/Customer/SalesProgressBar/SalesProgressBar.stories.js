import React from 'react';
import { storiesOf } from '@storybook/react';
import SalesProgressBar from '../../../lib/Customer/SalesProgressBar/SalesProgressBar'
import SalesProgressBarTooltip from "../../../lib/Customer/SalesProgressBarTooltip/SalesProgressBarTooltip";
import { text } from '@storybook/addon-knobs';

storiesOf('Customer/Components/SalesProgressBar', module)
    .add('SalesProgressBar', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBar percentage={text('Percentage', '35%')} />
            </div>
        </>
    )
    .add('SalesProgressBarTooltip', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBarTooltip percentage={text('Percentage', '50')} />
            </div>
        </>
    )
    .add('SalesProgressBarTooltip with different percentage', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBarTooltip percentage={text('Percentage', '50')} bindCount={1}/>
            </div>
        </>
    )
