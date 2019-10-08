import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import { VerticalTimeline } from '../../../lib/index';

const demoImageUrl = 'https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437';
const tipio={
    mainImageUrl: demoImageUrl,
    title: 'WAGNER Stol',
    subheading: 'Stol 71x74x92 Lær, Jern, Brun',
    meta: {
        joinedCount: 12,
        bidCount: 4,
        bidExpiresIn: new Date(),
        tipioOfferPrice: 24,
        tipioOfferCompanyName: 'Company name'
    }
};

function setStepCompletion (s, N) {
    const res = {};
    for (let i = 1; i <= N; i += 1) {
        res[i] = 'coming';
        if (i <= s) {
            res[i] = 'completed';
        }
    }
    return res
}

storiesOf('Customer/Components/Modals/VerticalTimeline', module)
    .add('With Loading', () =>
        <>
            <VerticalTimeline
                isLoading={true}
            />
        </>
    )
    .add('With step 1 completed', () =>
        <>
            <VerticalTimeline
                tipio={tipio}
                stepStatus={setStepCompletion(1, 5)}
            />
        </>
    )
    .add('With step 2 completed', () =>
        <>
            <VerticalTimeline
                tipio={tipio}
                stepStatus={setStepCompletion(2, 5)}
            />
        </>
    )
    .add('With step 3 completed', () =>
        <>
            <VerticalTimeline
                tipio={tipio}
                stepStatus={setStepCompletion(3, 5)}
            />
        </>
    )
    .add('With step 4 completed', () =>
        <>
            <VerticalTimeline
                tipio={tipio}
                stepStatus={setStepCompletion(4, 5)}
            />
        </>
    )
    .add('With step 5 completed', () =>
        <>
            <VerticalTimeline
                tipio={tipio}
                stepStatus={setStepCompletion(5, 5)}
            />
        </>
    )
