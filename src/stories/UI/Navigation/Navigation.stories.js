import React from 'react';
import {storiesOf} from '@storybook/react';
import SubNav from "../../../lib/UI/SubNav/SubNav";


storiesOf('UI/Navigation', module)

    .add('Sub Navigation With Avatar', () =>
        <>
            <div className="col-8 m-3">
                <SubNav
                    title={"Elkjøp - Sandvika"}
                    items={[
                    {
                        'title': 'Min profil',
                        'link': '/min-profil'
                    },
                    {
                        'title': 'Dashboard',
                        'link': '/dashboard'
                    }
                ]}
                 avatar={"https://media.licdn.com/dms/image/C4E0BAQH68IJX_M94XA/company-logo_400_400/0?e=1577318400&v=beta&t=lCBG1Ra3mD0X0XNoqfARizY-hi4I1V1PQJGx6vhpcRI"}
                />
            </div>
        </>
    )
    .add('Sub Navigation', () =>
        <>
            <div className="col-8 m-3">
                <SubNav
                    title={"Min Tipios"}
                    items={[
                        {
                            'title': 'Min profil',
                            'link': '/min-profil'
                        },
                        {
                            'title': 'Dashboard',
                            'link': '/dashboard'
                        }
                    ]}
                />
            </div>
        </>
    )
