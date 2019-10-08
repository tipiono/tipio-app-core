import React from 'react';
import {storiesOf} from '@storybook/react';
import {PublishedBy} from '../../../lib'

storiesOf('UI/Product Published By', module)
    .add('Published By', () =>
        <>
            <div className="col-4 m-3">
                <PublishedBy
                    avatar={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    username={"Michael Lybek"}
                    date={"01.06.18"}
                    url={"massimodutti.com"}
                />
            </div>
        </>
    )




