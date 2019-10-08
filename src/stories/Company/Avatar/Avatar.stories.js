import React from 'react';
import {storiesOf} from '@storybook/react';
import {EmptyAvatar, ChangeAvatar, Avatar} from '../../../lib';


storiesOf('Company/Components/Avatar', module)

    .add('Empty Avatar', () =>
        <>
            <div className="col-3 m-3">
                <EmptyAvatar/>
            </div>
        </>
    )
    .add('Change Avatar', () =>
        <>
            <div className="col-3 m-3">
                <ChangeAvatar/>
            </div>
        </>
    )
