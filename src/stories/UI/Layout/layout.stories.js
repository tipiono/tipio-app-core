import React from 'react';
import {storiesOf} from '@storybook/react';
import { PublicLayout } from '../../../lib'

// Pågående
// Avsluttet

const t = {
    menuVisible: true,
    items: [
        {
            name: 'Mine Tipioer',
            sub_items: [
                {
                    name: 'Pågående'
                },
                {
                    name: 'Avsluttet'
                }
            ]
        },
        {
            name: 'Min profil'
        },
        {
            name: 'Dashboard'
        },
        {
            name: 'Instillinger'
        },
        {
            name: 'Om Tipio'
        },
        {
            name: 'Logg ut'
        }
    ]
};

storiesOf('UI/Layouts', module)
    .add('PublicLayout', () =>
        <>
            <div className="col-5 m-3">
                <PublicLayout {...t}>
                    Test
                </PublicLayout>
            </div>
        </>
    )




