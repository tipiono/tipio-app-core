import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button, TextInput} from '../../lib';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Text Input', module)
    .add('default', () =>  <div className="col-sm-6">
        <TextInput
            onChange={action('changed')}
            placeholder={text('Placeholder', 'email@ornio.no')}
            label={text("Label", "E-mail")}
        />
    </div>)
