import React from 'react';
import {storiesOf} from '@storybook/react';
import {ImageSlider} from '../../../lib'

storiesOf('UI/Image Slider', module)
    .add('Slider', () =>
        <>
            <div className="col-5 m-3">
                <ImageSlider/>
            </div>
        </>
    )




