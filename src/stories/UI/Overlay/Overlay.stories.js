import React from 'react';
import {storiesOf} from '@storybook/react';
import Overlay from "../../../lib/UI/Overlay/Overlay";

storiesOf('UI/BG Overlay', module)
    .add('Background Overlay', () =>
        <>
            <div className="col-5 m-3">
                <Overlay/>
            </div>
        </>
    );




