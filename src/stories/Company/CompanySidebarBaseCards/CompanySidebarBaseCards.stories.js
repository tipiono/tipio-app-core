import React from 'react';
import { storiesOf } from '@storybook/react';
import { CompanySidebarBaseCard } from '../../../lib/index';


storiesOf('Company/Components/Company Sidebar Cards', module)
    .add('Base Card', () =>
        <>
            <div className="col-4 m-3">
                <CompanySidebarBaseCard state=""/>
            </div>
        </>
    )
