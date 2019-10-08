import React from 'react';
import {storiesOf} from '@storybook/react';
import {SaleCard, SaleCardAddToCartButton} from '../../../lib/index';

storiesOf('Customer/Components/Cards/SaleCard', module)
    .add('Sale Card', () =>
        <>
            <div className="col-4 m-3">
                <SaleCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    title={"Wireless Bluetooth  Earphones"}
                    salePrice={"1 500 Kr"}
                    costPrice={"1 989 Kr"}
                    saleDiscount={"-30%"}
                >
                    <SaleCardAddToCartButton />
                </SaleCard>
            </div>
        </>
    )

