import React from 'react';
import {storiesOf} from '@storybook/react';
import Alert from "../../../lib/UI/Alert/Alert";

storiesOf('UI/Alerts', module)
    .add('Purple Alert', () =>
        <>
            <div className="col-4 m-3">
                <Alert
                    color={'bg-purple'}
                    content={'Lurer du på hvordan Tipio funker?'}
                />
            </div>
        </>
    )

    .add('Red Alert', () =>
        <>
            <div className="col-4 m-3">
                <Alert
                    color={'bg-red'}
                    content={'Lurer du på hvordan Tipio funker?'}
                />
            </div>
        </>
    )

    .add('Warning Alert', () =>
        <>
            <div className="col-4 m-3">
                <Alert
                    color={'bg-yellow'}
                    content={'Lurer du på hvordan Tipio funker?'}
                />
            </div>
        </>
    )

    .add('Success Alert', () =>
        <>
            <div className="col-4 m-3">
                <Alert
                    color={'bg-green'}
                    content={'Lurer du på hvordan Tipio funker?'}
                />
            </div>
        </>
    )






