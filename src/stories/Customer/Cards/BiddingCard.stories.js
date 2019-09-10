import React from 'react';
import {storiesOf} from '@storybook/react';
import {BiddingCard, BiddingCardShareButton,} from '../../../lib/index';

storiesOf('Customer/Components/Cards/BiddingCard', module)
    .add('Enroll interest', () =>
        <>
            <div className="col-3 m-3">
                <BiddingCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    title={"Long product name"}
                    description={"Sub heading"}
                    salePrice={"800 Kr"}
                    costPrice={"1299 Kr"}
                >
                </BiddingCard>
            </div>
        </>
    )
    .add('Share now', () =>
        <>
            <div className="col-3 m-3">
                <BiddingCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    title={"Long product name"}
                    description={"Sub heading"}
                    salePrice={"800 Kr"}
                    costPrice={"1299 Kr"}
                >
                    <BiddingCardShareButton />
                </BiddingCard>
            </div>
        </>
    )
