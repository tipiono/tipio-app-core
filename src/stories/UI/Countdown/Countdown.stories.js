import React from 'react';

import { storiesOf } from '@storybook/react';
import { date } from '@storybook/addon-knobs';
import { PinkyCountdownSM, TipioCountdown, CountdownType } from '../../../lib';

const defaultValue = new Date('Jan 20 2017');

storiesOf('UI/Countdown', module)

    .add('Pinky Countdown', () =>
        <>
            <div className="col-3 m-3">
                <PinkyCountdownSM expires_in={date(defaultValue)} type={CountdownType.PINK}/>
            </div>
        </>
    )
    .add('Green Countdown', () =>
        <>
            <div className="col-3 m-3">
                <PinkyCountdownSM expires_in={date(defaultValue)} type={CountdownType.GREEN}/>
            </div>
        </>
    )
    .add('BG Countdown', () =>
        <>
            <div className="col-3 m-3">
                <TipioCountdown expires_in={date(defaultValue)}/>
            </div>
        </>
    )

