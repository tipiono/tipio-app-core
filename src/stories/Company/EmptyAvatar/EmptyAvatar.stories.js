import React from 'react';
import { storiesOf } from '@storybook/react';
import {EmptyAvatar} from '../../../lib/index';


storiesOf('Company/Components/EmptyAvatar', module)

    .add('EmptyAvatar', () =>
        <>
            <div className="col-3 m-3">
               <EmptyAvatar />
            </div>
        </>
    )
