import React from 'react';
import { storiesOf } from '@storybook/react';
import {SecondaryButton, TextInput} from '../../../lib';
import { action } from '@storybook/addon-actions/dist/index';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('UI/Text Input', module)
    .add('default', () =>  <div className="col-sm-6">
        <TextInput
            onChange={action('changed')}
            placeholder={text('Placeholder', 'email@ornio.no')}
        />
    </div>)
