import React from 'react';
import {storiesOf} from '@storybook/react';
import { ImageSlider } from '../../../lib'

const images = [
    {
        blob_url: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/133/1567587691480",
    },
    {
        blob_url: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/133/1567587691658",
    },
    {
        blob_url: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/133/1567587691841",
    }
];
storiesOf('UI/Image Slider', module)
    .add('Slider', () =>
        <>
            <div className="col-5 m-3">
                <ImageSlider images={images} showThumbs/>
            </div>
        </>
    )
