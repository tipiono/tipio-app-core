import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions/dist/index';
import { text, boolean } from '@storybook/addon-knobs';
import {SecondaryButton, SecondaryOutlineButton} from '../../../lib';



storiesOf('UI/Buttons/Secondary Button', module)

    .add('Button with text', () =>
        <>
            <div className="col-3 m-3">
                <SecondaryButton onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)} />
            </div>
        </>
    )

    .add('Button with loading', () =>
        <>
            <div className="col-3 m-3">
                <SecondaryButton onClick={action('clicked')} text={'Dette er ikke bindene'} loading={true}/>
            </div>
        </>
    )



storiesOf('UI/Buttons/Secondary Outline Button', module)

    .add('Button with text', () =>
        <>
            <div className="col-3 m-3">
                <SecondaryOutlineButton onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)} />
            </div>
        </>
    )

    .add('Button with loading', () =>
        <>
            <div className="col-3 m-3">
                <SecondaryOutlineButton onClick={action('clicked')} text={'Dette er ikke bindene'} loading={true}/>
            </div>
        </>
    )
