import React from 'react';
import {storiesOf} from '@storybook/react';
import { ImageSlider } from '../../../lib'

const images = [
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60532/BH_16419_OEkern_Lamper_mm140_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60545/BH_16419_OEkern_Lamper_mm161_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60540/BH_16419_OEkern_Lamper_mm147_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60541/BH_16419_OEkern_Lamper_mm150_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60532/BH_16419_OEkern_Lamper_mm140_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60545/BH_16419_OEkern_Lamper_mm161_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60540/BH_16419_OEkern_Lamper_mm147_l.jpg",
    },
    {
        blob_url: "https://www.bohus.no/mediabank/store/6/60541/BH_16419_OEkern_Lamper_mm150_l.jpg",
    }
];
storiesOf('UI/Image Slider', module)
    .add('Slider', () =>
        <>
            <div className="col-md-4 m-3">
                <ImageSlider images={images} showThumbs/>
            </div>
        </>
    )
