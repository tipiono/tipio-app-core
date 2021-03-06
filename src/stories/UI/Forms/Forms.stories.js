import React from 'react';
import {storiesOf} from '@storybook/react';
import {Input, Textarea, Select, Checkbox, RadioButton, ToggleSwitch, FromToInput, PriceInput } from '../../../lib'

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
                options={['Miremengjesi', 'Yo all', 'Hello world']}
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
                <RadioButton text={"Option 1"} />
            </div>
        </>
    )
    .add('Unchecked', () =>
        <>
            <div className="col-3 m-3">
                <RadioButton text={"Option 1"} />
            </div>
        </>
    )
    .add('Disabled', () =>
        <>
            <div className="col-3 m-3">
                <RadioButton text={"Option 1"} />
            </div>
        </>
    )


    storiesOf('UI/Forms/FromToInput', module)

    .add('Default', () =>
        <>
            <div className="col-3 m-5">
                <FromToInput from={"1"} label={"Antall kjøpere"}/>
            </div>
        </>
    )

    storiesOf('UI/Forms/PriceInput', module)

        .add('Default', () =>
            <>
                <div className="col-3 m-5">
                    <PriceInput placeholder={"50"} label={"Ditt tilbud"}/>
                </div>
            </>
        )
