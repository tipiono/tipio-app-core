import React from 'react';
import {storiesOf} from '@storybook/react';
import {ErrorMessage} from '../../../lib'

storiesOf('UI/Error Messages', module)
    .add('Red', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-yellow"}
                />
            </div>
        </>
    )
