import React from 'react';
import {storiesOf} from '@storybook/react';
import {ProductDetails} from '../../../lib'

storiesOf('UI/Product Details', module)
    .add('Product Details', () =>
        <>
            <div className="col-5 m-3">
                <ProductDetails/>
            </div>
        </>
    )




