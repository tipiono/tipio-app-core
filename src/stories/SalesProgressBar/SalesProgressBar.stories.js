import React from 'react';
import { storiesOf } from '@storybook/react';
import SalesProgressBar from '../../lib/SalesProgressBar/SalesProgressBar'


storiesOf('Components/SalesProgressBar', module)
    .add('SalesProgressBar', () =>
        <>
            <div className="col-3 mb-3">
                <SalesProgressBar />
            </div>
        </>
    )
