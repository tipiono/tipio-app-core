import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../../lib/Pagination/Pagination'


storiesOf('Components/Pagination', module)
    .add('Pagination', () =>
        <>
            <div className="col-3 m-3">
                <Pagination />
            </div>
        </>
    )
