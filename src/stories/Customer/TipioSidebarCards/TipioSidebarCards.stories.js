import React from 'react';
import { storiesOf } from '@storybook/react';
import { TipioSidebarVotingCard, TipioSidebarBindingCard } from '../../../lib/index';


storiesOf('Customer/Components/TipioSidebarCards', module)
    .add('Voting/Tipio Show Interest', () =>
        <>
            <div className="col-3 mb-3">
                <TipioSidebarVotingCard  state=""/>
            </div>
        </>
    )
    .add('Voting/Tipio Share', () =>
        <>
            <div className="col-3 mb-3">
                <TipioSidebarVotingCard  state="interested"/>
            </div>
        </>
    )
    .add('Binding/Tipio Add to cart', () =>
        <>
            <div className="col-3 mb-3">
                <TipioSidebarBindingCard  state=""/>
            </div>
        </>
    )
    .add('Binding/Tipio Share', () =>
        <>
            <div className="col-3 mb-3">
                <TipioSidebarBindingCard   state="bought"/>
            </div>
        </>
    )
