import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageUploader from "../../../lib/Customer/ImageUploader/ImageUploader";

storiesOf('Customer/Components/Image Uploader', module)
    .add('Image Uploader', () =>
        <>
            <div className="col-4 m-3">
                <ImageUploader />
            </div>
        </>
    )
