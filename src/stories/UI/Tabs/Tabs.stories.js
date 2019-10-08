import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tabs, TabNav, TabNavItem, TabContent, TabContentItem, PillTabs} from '../../../lib'

storiesOf('UI/Tabs', module)
    .add('Tabs', () =>
        <>
            <div className="col-5 m-3">
             <Tabs>
                 <TabNav>
                     <TabNavItem>Interessert</TabNavItem>
                     <TabNavItem>Motatte tilbud</TabNavItem>
                     <TabNavItem>Bestillinger</TabNavItem>
                 </TabNav>
                 <TabContent>
                     <TabContentItem>Test 1 content</TabContentItem>
                     <TabContentItem>Test 2 content</TabContentItem>
                     <TabContentItem>Test 3 content</TabContentItem>
                 </TabContent>
            </Tabs>
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
