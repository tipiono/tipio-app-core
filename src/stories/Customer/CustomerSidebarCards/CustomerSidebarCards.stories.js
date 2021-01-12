import React from 'react';
import { storiesOf } from '@storybook/react';
import { TipioSidebarVotingCard, TipioSidebarBindingCard } from '../../../lib/index';

storiesOf('Customer/Components/CustomerSidebarCards', module)
    .add('Voting/Tipio Show Interest', () => (
        <>
            <div className="col-4 m-3">
                <TipioSidebarVotingCard state="" title="Title" brand="Brand" vote={true} market_price="456" />
            </div>
        </>
    ))
    .add('Voting/Tipio Share', () => (
        <>
            <div className="col-4 m-3">
                <TipioSidebarVotingCard state="interested" title="Title" brand="Brand" vote={true} market_price="456" />
            </div>
        </>
    ))
    .add('Binding/Tipio Add to cart', () => (
        <>
            <div className="col-4 m-3">
                <TipioSidebarBindingCard
                    state=""
                    maxBindCount={25}
                    joinCount={25}
                    title="Title"
                    brand="Brand"
                    market_price="456"
                    price={'234'}
                />
            </div>
        </>
    ))
    .add('Binding/Tipio Interested', () => (
        <>
            <div className="col-4 m-3">
                <TipioSidebarBindingCard
                    state="bought"
                    maxBindCount={25}
                    joinCount={5}
                    title="Title"
                    brand="Brand"
                    market_price="456"
                    price={'234'}
                />
            </div>
        </>
    ));
