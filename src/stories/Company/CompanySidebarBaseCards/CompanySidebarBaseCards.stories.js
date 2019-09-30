import React from 'react';
import { storiesOf } from '@storybook/react';
import { CompanySidebarBaseCard, CompanyAddBidCard } from '../../../lib/index';


storiesOf('Company/Components/Company Sidebar Cards', module)
    .add('Base Card', () =>
        <>
            <div className="col-4 m-3">
                <CompanySidebarBaseCard state=""/>
            </div>
        </>
    )

    .add('Add Bid Card', () =>
        <>
            <div className="col-4 m-3">
                <CompanyAddBidCard state="" />
            </div>
        </>
    )
    .add('Add Bid Card With Loading', () =>
        <>
            <div className="col-4 m-3">
                <CompanyAddBidCard state="" loading={true} />
            </div>
        </>
    )
