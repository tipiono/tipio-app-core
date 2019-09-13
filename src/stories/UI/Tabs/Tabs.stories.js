import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tabs, PillTabs} from '../../../lib'

storiesOf('UI/Tabs', module)
    .add('Tabs', () =>
        <>
            <div className="col-5 m-3">
             <Tabs />
            </div>
        </>
    )

    .add('Pill Tabs', () =>
        <>
            <div className="col-5 m-3">
                <PillTabs />
            </div>
        </>
    )
