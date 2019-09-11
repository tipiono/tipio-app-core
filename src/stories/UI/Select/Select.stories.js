import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '../../../lib';
import { action } from '@storybook/addon-actions/dist/index';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('UI/Select', module)
    .add('default', () =>  <div className="col-sm-6">
        <Select/> </div>)
    .add('withOptions', () => 
        <div className="col-sm-6">
            <Select
                options={['Miremengjesi', 'Yo all']}
            />
        </div>)
