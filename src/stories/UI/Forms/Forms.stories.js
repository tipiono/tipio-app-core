import React from 'react';
import {storiesOf} from '@storybook/react';
import {Input, Textarea, Select} from '../../../lib'

storiesOf('UI/Forms', module)
    .add('Input', () =>
        <>
            <div className="col-3 m-3">
                <Input
                    placeholder={"Example input"}
                />
            </div>
        </>
    )

    .add('Textarea', () =>
        <>
            <div className="col-3 m-3">
                <Textarea
                    placeholder={"Example textarea"}
                />
            </div>
        </>
    )
    .add('Select', () =>
        <>
            <div className="col-3 m-3">
                <Select />
            </div>
        </>
    )

    .add('Checkboxes and radios', () =>
        <>
            <div className="col-3 m-3">
               ###
            </div>
        </>
    )


