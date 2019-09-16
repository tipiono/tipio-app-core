import React from 'react';
import { storiesOf } from '@storybook/react';
import {EmptyCover} from '../../../lib/index';


storiesOf('Company/Components/EmptyCover', module)

    .add('EmptyCover', () =>
        <>
            <div className="col-3 m-3">
                <EmptyCover />
            </div>
        </>
    )
