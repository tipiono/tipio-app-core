import React from 'react';
import { storiesOf } from '@storybook/react';
import SalesProgressBar from '../../../lib/Customer/SalesProgressBar/SalesProgressBar';
import SalesProgressBarTooltip from '../../../lib/Customer/SalesProgressBarTooltip/SalesProgressBarTooltip';
import { text } from '@storybook/addon-knobs';

storiesOf('Customer/Components/SalesProgressBar', module)
    .add('SalesProgressBar', () => (
        <>
            <div className="col-3 mb-3">
                <SalesProgressBar percentage={25} bindingCount={25} totalCount={50} />
            </div>
        </>
    ))
    .add('SalesProgressBarTooltip', () => (
        <>
            <div className="col-3 mb-3">
                <SalesProgressBarTooltip percentage={25} bindCount={25} totalCount={50} />
            </div>
        </>
    ))
    .add('SalesProgressBarTooltip with different percentage', () => (
        <>
            <div className="col-3 mb-3">
                <SalesProgressBarTooltip percentage={25} bindCount={1} totalCount={50} />
            </div>
        </>
    ));
