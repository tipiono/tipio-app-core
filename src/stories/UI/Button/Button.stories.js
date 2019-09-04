import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions/dist/index';
import { text, boolean } from '@storybook/addon-knobs';
import { Button } from '../../../lib';


storiesOf('UI/Button/Tipio Button', module)
    .add('with text', () =>  <div className="col-sm-12 col-lg-5">
        <Button onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)}/>
    </div>)
    .add('with loading', () =>  <div className="col-sm-12 col-lg-5"><Button onClick={action('clicked')} text={'Dette er ikke bindene'} loading={true}/></div>)

