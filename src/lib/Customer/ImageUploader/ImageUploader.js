import React, { useState } from 'react';
import uuid from 'uuid';
import Dropzone from 'react-dropzone';
import Placeholder from './Placeholder';

import { ImageCropper } from '../../index';
import IconButton from '../../UI/Buttons/IconButton';
import RemoveImageIcon from '../../UI/Icons/RemoveImageIcon';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

function ImageUploader({ setFieldValue, name, errors, displayErrors, title, ...props }) {
    const [showCropper, setShowCropper] = useState(false);
    const [cropImage, setCropImage] = useState(null);
    const [initialCropCompleted, setInitialCropCompleted] = useState(null);
    const [croppedImageIndex, setCroppedImageIndex] = useState(null);
    const [files, setFiles] = useState(props.files ? props.files : []);

    const onDrop = (droppedFiles) => {
        if (droppedFiles.length === 0) {
            return;
        }
        const acceptedFiles = droppedFiles.map((file) =>
            Object.assign(file, {
                id: uuid.v4(),
                preview: URL.createObjectURL(file)
            })
        );

        const t = files.concat(acceptedFiles);
        setFiles(t);
        setFieldValue('files', t);
        setInitialCropCompleted(false);
        openCropper(acceptedFiles);
        setCroppedImageIndex(files && files.length + 1);
    };

    const openCropper = (files) => {
        setCropImage(files[0]);
        setShowCropper(true);
    };

    const removeImageButtonOnClick = (file) => {
        const f = files.filter((x) => x.id !== file.id);
        URL.revokeObjectURL(file.preview);
        setFiles(f);
        setFieldValue('files', f);
    };

    const cropperModalOnClose = () => {
        setShowCropper(false);
        setCropImage(null);
    };

    const cropperSetLoading = () => {};

    const cropperOnDone = (blob) => {
        let croppedImageIndex = files.findIndex((x) => x.id === cropImage.id);
        setCroppedImageIndex(croppedImageIndex + 2);
        let icc = !initialCropCompleted && croppedImageIndex === (files && files.length) - 1;
        if (icc) {
            setInitialCropCompleted(true);
        }

        const tempImage = files[croppedImageIndex];
        let file = new File([blob], tempImage.name, { type: tempImage.type });
        file.id = tempImage.id;
        file.path = tempImage.path;
        file.preview = URL.createObjectURL(file);
        files[croppedImageIndex] = file;
        setFiles([...files]);
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
    if (files && files.length > 1) {
        thumbs = files.slice(1).map((file) => {
            return (
                <div key={file.name} className="uploadViewer__thumbnail--item">
                    <img className="uploadViewer__thumbnail--item--image" src={file.preview} />

                    <span
                        className="uploadViewer__thumbnail--item--remove"
                        onClick={(e) => {
                            e.preventDefault();
                            removeImageButtonOnClick(file);
                        }}
                    >
                        <RemoveImageIcon />
                    </span>
                </div>
            );
        });
    }

    let indicator = null;
    if (!initialCropCompleted) {
        indicator = (
            <p className="label-sm mb-0 mt-3" style={{ textAlign: 'center' }}>
                {croppedImageIndex} av {files && files.length}
            </p>
        );
    }

    return (
        <>
            {showCropper && (
                <ImageCropper
                    title={title}
                    image={cropImage}
                    onDone={cropperOnDone}
                    onClose={cropperModalOnClose}
                    showCloseButton={initialCropCompleted}
                    indicator={indicator}
                    setLoading={cropperSetLoading}
                />
            )}
            <Dropzone accept="image/*" onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section className="uploadViewer">
                        <div {...getRootProps({ className: 'dropzone', onClick: (event) => event.preventDefault() })}>
                            <input {...getInputProps()} />
                            {files && files.length === 0 && <Placeholder />}
                            {/*{props.files.length > 0 && <button>Add</button>}*/}
                        </div>

                        {files && files.length > 0 && (
                            <div className="uploadViewer__main">
                                <img className="uploadViewer__main--image" src={files[0].preview} />

                                <span
                                    className="uploadViewer__main--remove"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeImageButtonOnClick(files[0]);
                                    }}
                                >
                                    <RemoveImageIcon />
                                </span>
                            </div>
                        )}

                        <aside className="uploadViewer__thumbnail">{thumbs}</aside>

                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />

                            {files && files.length > 0 && (
                                <div className="mt-3 mb-5">
                                    <IconButton
                                        text="Last opp produktbilder"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </Dropzone>
            {displayErrors && errors && errors[name] && (
                <ErrorMessage content={errors[name].message} color={'bg-red'} />
            )}
        </>
    );
}

export default ImageUploader;
