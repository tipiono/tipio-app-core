import React from 'react';
import {storiesOf} from '@storybook/react';
import { Table } from '../../../lib'

const columns = [
    {title: "Alder:"},
    {title: "Kvinner:"},
    {title: "Menn:"},
];

const rows = [
    [
        "18-27", "-", "-"
    ],
    [
        "28-40", "-", "-"
    ],
    [
        "41-45", "-", "1"
    ],
    [
        "55-65", "-", "-"
    ],
    [
        "65- oppover", "-", "1"
    ]
]

storiesOf('UI/Table', module)
    .add('Table', () =>
        <>
            <div className="col-5 m-3">
                <Table columns={columns} rows={rows}/>
            </div>
        </>
    )
