import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions/dist/index';
import { text, boolean } from '@storybook/addon-knobs';
import {SecondaryButton, SecondaryOutlineButton, DisabledButton, GrayButton, GrayOutlineButton, IconButton, AddCategoryButton, SelectedCategoryButton, RoundedButton} from '../../../lib';


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
    );



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
    );

storiesOf('UI/Buttons/Gray Button', module)

    .add('Button with text', () =>
        <>
            <div className="col-3 m-3">
                <GrayButton onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)} />
            </div>
        </>
    )

    .add('Button with loading', () =>
        <>
            <div className="col-3 m-3">
                <SecondaryButton onClick={action('clicked')} text={'Dette er ikke bindene'} loading={true}/>
            </div>
        </>
    );

storiesOf('UI/Buttons/Gray Outline Button', module)

    .add('Button with text', () =>
        <>
            <div className="col-3 m-3">
                <GrayOutlineButton onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)} />
            </div>
        </>
    )

    .add('Button with loading', () =>
        <>
            <div className="col-3 m-3">
                <GrayOutlineButton onClick={action('clicked')} text={'Dette er ikke bindene'} loading={true}/>
            </div>
        </>
    );


storiesOf('UI/Buttons/Disabled Button', module)

    .add('Disabled Button', () =>
        <>
            <div className="col-3 m-3">
                <DisabledButton onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)} />
            </div>
        </>
    );


storiesOf('UI/Buttons/Button with Icon', module)

    .add('Button with Icon', () =>
        <>
            <div className="col-3 m-3">
                <IconButton text={"Legg inn begrenset antall"} />
            </div>
        </>
    );

storiesOf('UI/Buttons/Add Category Button', module)

    .add('Add Category Button', () =>
        <>
            <div className="col-3 m-3">
                <AddCategoryButton />
            </div>
        </>
    )
    .add('Selected Category Button', () =>
        <>
            <div className="col-3 m-3">
                <SelectedCategoryButton title={'Elektronikk'} />
            </div>
        </>
    );

storiesOf('UI/Buttons/Rounded Button', module)

    .add('Rounded Button with text', () =>
        <>
            <div className="col-3 m-3">
                <RoundedButton onClick={action('clicked')} text={text('Label', 'Dette er ikke bindene')} loading={boolean('Loading ', false)} />
            </div>
        </>
    )

    .add('Rounded Button with loading', () =>
        <>
            <div className="col-3 m-3">
                <RoundedButton onClick={action('clicked')} text={'Dette er ikke bindene'} loading={true}/>
            </div>
        </>
    );



