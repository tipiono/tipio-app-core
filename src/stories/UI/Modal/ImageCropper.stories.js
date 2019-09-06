import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {
    ImageCropper
} from '../../../lib';
import { action } from '@storybook/addon-actions/dist/index';

function CropperDemo() {
    const [showCropper, setShowCropper] = useState(false);
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [fileInput, setFileInput] = useState(undefined);

    const handleSelectedFile = e => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setSelectedFile(file);
        setShowCropper(true);
    };
    return(
        <>
            <form className="avatar-uploader-btn">
                 <input type="file" name="" id="" onChange={handleSelectedFile} ref={(input) => {
                    setFileInput(input);
                 }}/>
                { showCropper &&
                    <ImageCropper
                        aspectRatio={1}
                        image={selectedFile}
                        onDone={action('done')}
                        onClose={action('close')}
                    /> }
            </form>
        </>
    )
}

storiesOf('UI/Components/Modal/ImageCropper', module)
    .add('Crop image', () =>
        <>
            <div className="col-3 m-3">
                <h2>Image Cropper</h2>
                <CropperDemo />
                <pre>
                    {`
    const [showCropper, setShowCropper] = useState(false);
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [fileInput, setFileInput] = useState(undefined);

    const handleSelectedFile = e => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setSelectedFile(file);
        setShowCropper(true);
    };
    return(
        <>
            <form className="avatar-uploader-btn">
                 <input type="file" name="" id="" onChange={handleSelectedFile} ref={(input) => {
                    setFileInput(input);
                 }}/>
                { showCropper &&
                    <ImageCropper
                        aspectRatio={1}
                        image={selectedFile}
                        onDone={action('done')}
                        onClose={action('close')}
                    /> }
            </form>
        </>
    )
                    `}
                </pre>
            </div>
        </>
    )
