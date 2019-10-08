import React from 'react';
import {storiesOf} from '@storybook/react';
import { SelectImages } from '../../../lib'

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
const title = 'Velg bildene som du vil ha med i Tipioen';


storiesOf('UI/Select Images', module)
    .add('Select Images', () =>
        <>
            <SelectImages images={images.map(x=> x.blob_url)} title={title} />
        </>
    )
