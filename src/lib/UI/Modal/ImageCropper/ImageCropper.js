import React, { Component } from 'react';
import { Modal, ModalType } from '../Modal';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import GrayOutlineButton from '../../Buttons/GrayOutlineButton';
import SecondaryButton from '../../Buttons/SecondaryButton';

class ImageCropper extends Component {
    constructor(props) {
        super(props);
        this.modalOnClose = this.modalOnClose.bind(this);
        this.cropDoneOnClick = this.cropDoneOnClick.bind(this);
        this.state = {
            cropperReady: false,
            cropperInstance: null,
            isSubmitting: false
        };
    }
    componentDidMount() {
        const setCropperReady = (cropperInstance) => {
            setTimeout(() => {
                this.setState({ cropperReady: true, cropperInstance });
            }, 500);
        };

        const image = document.getElementById('image');
        const cropper = new Cropper(image, {
            aspectRatio: this.props.aspectRatio || '',
            // modal: false,
            background: false,
            crop(event) {},
            ready() {
                setCropperReady(cropper);
            },
            viewMode: 1
        });
    }
    // componentWillUnmount() {
    //     //this.props.onClose();
    //     this.state.cropperInstance.destroy();
    // }

    modalOnClose() {
        // this.setState({showCropModal: false, cropImage: null, cropperReady: false});
        this.props.onClose();
    }
    cropDoneOnClick(e) {
        e.preventDefault();
        this.setState({ isSubmitting: true });
        this.props.setLoading(true);
        this.state.cropperInstance.getCroppedCanvas().toBlob((blob) => {
            this.props.onDone(blob);
        });
    }
    render() {
        let showCloseButton = this.props.showCloseButton;
        let modalOnClose = this.modalOnClose;
        if (!showCloseButton) {
            modalOnClose = () => {};
        }
        return (
            <>
                <Modal showCloseButton onCloseButtonClick={this.modalOnClose}>
                    <div className="imageCropper">
                        <div className="imageCropper__content">
                            <h3 className="imageCropper__content--title">{this.props.title}</h3>
                            {!this.state.cropperReady && (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )}

                            <div
                                style={{ opacity: this.state.cropperReady ? 100 : 0, width: '350px', height: '350px' }}
                            >
                                <img id="image" src={this.props.image.preview} />
                            </div>

                            {this.props.indicator && this.props.indicator}
                            <ul className="imageCropper__content__action">
                                <li className="imageCropper__content__action--cancel">
                                    <GrayOutlineButton
                                        text={'Avbryt'}
                                        onClick={this.modalOnClose}
                                        disabled={this.props.isSubmitting}
                                    />
                                </li>
                                <li className="imageCropper__content__action--next">
                                    <SecondaryButton
                                        text={'Neste'}
                                        onClick={this.cropDoneOnClick}
                                        loading={this.props.isSubmitting}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default ImageCropper;
