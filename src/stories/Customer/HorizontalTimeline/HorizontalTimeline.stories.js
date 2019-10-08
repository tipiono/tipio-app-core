import React from 'react';
import {storiesOf} from '@storybook/react';
import {HorizontalTimeline} from '../../../lib/index';

storiesOf('Customer/Components/HorizontalTimeline', module)
    .add('HorizontalTimeline', () =>
        <>
            <div className="col-3 m-3">
                <HorizontalTimeline />
            </div>
        </>
    )
