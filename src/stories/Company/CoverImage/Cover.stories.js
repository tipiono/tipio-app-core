import React from 'react';
import { storiesOf } from '@storybook/react';
import {EmptyCover, ChangeCover} from '../../../lib/index';


storiesOf('Company/Components/CoverImageSection Image', module)

    .add('Empty CoverImageSection', () =>
        <>
            <div className="col-3 m-3">
                <EmptyCover />
            </div>
        </>
    )

    .add('Change CoverImageSection', () =>
        <>
            <div className="col-3 m-3">
                <ChangeCover />
            </div>
        </>
    )
