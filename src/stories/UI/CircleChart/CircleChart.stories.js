import React from 'react';
import { storiesOf } from '@storybook/react';
import CircleChart from "../../../lib/UI/CircleChart/CircleChart";

storiesOf('UI/Circle Chart', module)
    .add('Circle Chart', () =>
        <>
            <div className="col-3 m-3">
                <CircleChart />
            </div>
        </>
    )
