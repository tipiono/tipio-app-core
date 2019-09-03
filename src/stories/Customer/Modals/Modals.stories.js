import React from 'react';
import { storiesOf } from '@storybook/react';
import { TipioWithOffer, TipioConfirmation } from '../../../lib/index';
import ProductCard from "../../../lib/Customer/ProductCard/ProductCard";


storiesOf('Customer/Components/Modals', module)
    .add('TipioWithOffer', () =>
        <>
            <div className="col-3 m-3">
                <TipioWithOffer
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437"}
                    sale={"20%"}
                    joined={220}
                />
            </div>
        </>
    )

    .add('TipioConfirmation', () =>
        <>
            <div className="col-3 m-3">
                <TipioConfirmation
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437"}
                    expiresIn={new Date()}
                />
            </div>
        </>
    )

