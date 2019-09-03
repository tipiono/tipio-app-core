import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductCard from '../../lib/ProductCard/ProductCard'


storiesOf('Components/ProductCard', module)
    .add('ProductCard', () =>
        <>
            <div className="col-3 m-3">
                <ProductCard />
            </div>
        </>
    )

