import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductCard from '../../../lib/Customer/ProductCard/ProductCard'


storiesOf('Customer/Components/ProductCard', module)
    .add('ProductCard', () =>
        <>
            <div className="col-3 m-3">
                <ProductCard
                    product={{
                        expires_in: new Date(),
                        title: "Test",
                        market_price: 123,
                        images:[
                            {
                                blob_url: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437"
                            }
                        ],
                        subtitle: 'Sart value has mixed support, consider using flex-start instead'
                    }}
                />
            </div>
        </>
    )

