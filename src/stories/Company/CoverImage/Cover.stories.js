import React from 'react';
import { storiesOf } from '@storybook/react';
import {EmptyCover, ChangeCover} from '../../../lib/index';


storiesOf('Company/Components/Cover Image', module)

    .add('Empty Cover', () =>
        <>
            <div className="col-3 m-3">
                <EmptyCover />
            </div>
        </>
    )

    .add('Change Cover', () =>
        <>
            <div className="col-3 m-3">
                <ChangeCover />
            </div>
        </>
    )
