import React from 'react';
import {storiesOf} from '@storybook/react';
import SubNav from "../../../lib/UI/SubNav/SubNav";


storiesOf('UI/Navigation', module)

    .add('Sub Navigation', () =>
        <>
            <div className="col-8 m-3">
                <SubNav />
            </div>
        </>
    )
