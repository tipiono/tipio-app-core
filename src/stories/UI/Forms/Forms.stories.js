import React from 'react';
import {storiesOf} from '@storybook/react';
import {Input, Textarea, Select, Checkbox, RadioButton, ToggleSwitch} from '../../../lib'

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
        <div className="col-3 m-3">
            <Select
                label={"Select"}
                options={['Miremengjesi', 'Yo all']}
            />
        </div>
    )

    .add('Toggle Switch', () =>
        <>
            <div className="col-3 m-3">
                <ToggleSwitch />
            </div>
        </>
    )

storiesOf('UI/Forms/Checkboxes', module)

    .add('Checked', () =>
        <>
            <div className="col-3 m-3">
               <Checkbox />
            </div>
        </>
    )
    .add('Unchecked', () =>
        <>
            <div className="col-3 m-3">
                <Checkbox />
            </div>
        </>
    )
    .add('Disabled', () =>
        <>
            <div className="col-3 m-3">
                <Checkbox />
            </div>
        </>
    )


storiesOf('UI/Forms/Radios', module)

    .add('Checked', () =>
        <>
            <div className="col-3 m-3">
                <RadioButton />
            </div>
        </>
    )
    .add('Unchecked', () =>
        <>
            <div className="col-3 m-3">
                <RadioButton />
            </div>
        </>
    )
    .add('Disabled', () =>
        <>
            <div className="col-3 m-3">
                <RadioButton />
            </div>
        </>
    )



