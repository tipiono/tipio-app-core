import React, { useState } from 'react';
import uuid from 'uuid';
import Dropzone from 'react-dropzone';
import { thumb, thumbInner, img, thumbsContainer } from './ImageFormStyle';
import Placeholder from './Placeholder';

import { ImageCropper } from '../../index';

function ImageUploader({ setFieldValue }) {
    const [showCropper, setShowCropper] = useState(false);
    const [cropImage, setCropImage] = useState(null);
    const [initialCropCompleted, setInitialCropCompleted] = useState(null);
    const [croppedImageIndex, setCroppedImageIndex] = useState(null);
    const [files, setFiles] = useState([]);

    const onDrop = (droppedFiles) => {
        if (droppedFiles.length === 0) { return; }
        const acceptedFiles = droppedFiles.map(file => Object.assign(file, {
            id: uuid.v4(),
            preview: URL.createObjectURL(file)
        }));
        
        const t = files.concat(acceptedFiles);
        setFiles(t);
        setFieldValue('files', t);
        setInitialCropCompleted(false);
        openCropper(acceptedFiles);
        setCroppedImageIndex(files.length + 1);
    };

    const openCropper = (files) => {
        setCropImage(files[0]);
        setShowCropper(true);
    }

    const removeImageButtonOnClick = (file) => {
        const f = files.filter(x => x.id !== file.id);
        URL.revokeObjectURL(file.preview);
        setFiles(f);
        setFieldValue('files', f);
    };

    const cropperModalOnClose = () => {
        setShowCropper(false);
        setCropImage(null);
    };

    const cropperOnDone = (blob) => {
        let croppedImageIndex = files.findIndex((x)=>(x.id === cropImage.id));
        setCroppedImageIndex(croppedImageIndex + 2);
        let icc = !initialCropCompleted && croppedImageIndex === files.length - 1;
        if (icc) {
            setInitialCropCompleted(true);
        }

        const tempImage = files[croppedImageIndex];
        let file = new File([blob], tempImage.name);
        file.id = tempImage.id;
        file.path = tempImage.path;
        file.preview = URL.createObjectURL(file);
        files[croppedImageIndex] = file;
        setFiles(files);
        setFieldValue('files', files);
        if (!icc && !initialCropCompleted) {
            setCropImage(files[croppedImageIndex + 1]);
            setShowCropper(false);
            setShowCropper(true);
        } else {
            setShowCropper(false);
            setCropImage(null);
        }
    };

    let thumbs = null;
    if (files.length > 1) {
        thumbs = files.slice(1).map(file => (
            <div className="thumbs-wrapper">
                <div  style={thumb} key={file.name} className="thumb">
                    <div style={thumbInner}>
                        <img
                            className="img-fluid"
                            src={file.preview}
                            style={img}
                        />
                    </div>
                </div>
                {/*<span className="crop-button-sm" onClick={(e)=>{e.preventDefault();cropButtonOnClick(file)}}><img className="img-fluid" src={Crop} alt="Crop"/></span>*/}
                <span className="remove-button-sm" onClick={(e)=>{e.preventDefault();removeImageButtonOnClick(file)}}><img className="img-fluid" alt="Remove"/>Close </span>
            </div>
        ));
    }

    let indicator = null;
    if (!initialCropCompleted) {
        indicator = <p className="label-sm mb-0 mt-3" style={{ textAlign: 'center' }}>{croppedImageIndex} av {files.length}</p>;
    }

    return (
        <>
            {showCropper && (
                <ImageCropper
                    image={cropImage}
                    onDone={cropperOnDone}
                    onClose={cropperModalOnClose}
                    showCloseButton={initialCropCompleted}
                    indicator={indicator}/>
            )}
            <Dropzone accept="image/*" onDrop={onDrop}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps({ className: 'dropzone', onClick: event => event.preventDefault() })}>
                            <input {...getInputProps()} />
                            {files.length === 0 && <Placeholder />}
                            {/*{props.files.length > 0 && <button>Add</button>}*/}
                        </div >
                        {files.length > 0 && <div className="image-preview">
                            <img className="img-fluid" src={files[0].preview}/>
                            <span className="remove-button-lg" onClick={(e)=>{e.preventDefault();removeImageButtonOnClick(files[0])}}><img className="img-fluid" src={""} alt=""/>Close</span>
                        </div>}
                        <aside style={thumbsContainer}>
                            {thumbs}
                        </aside>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            {files.length > 0 && <a className="second-image-uploader" href="" onClick={(e)=>{e.preventDefault();}}>
                                <img src={"Add Tipio"} alt=""/>
                                <p className="mb-0 text-primary">Last opp produktbilder qqq</p>
                            </a>}
                        </div>
                    </section>
                )}
            </Dropzone>
        </>
    )
}

export default ImageUploader;
