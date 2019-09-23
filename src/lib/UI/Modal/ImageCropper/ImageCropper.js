import React, { Component } from 'react';
import {Modal, ModalType} from '../Modal'
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import GrayOutlineButton from '../../Buttons/GrayOutlineButton';

class ImageCropper extends Component {
    constructor(props) {
        super(props);
        this.modalOnClose = this.modalOnClose.bind(this);
        this.cropDoneOnClick = this.cropDoneOnClick.bind(this);
        this.state = {
            cropperReady: false,
            cropperInstance: null,
            isSubmitting: false,
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
            // aspectRatio: this.props.aspectRatio || 2 / 3,
            // modal: false,
            background: false,
            crop(event) {
            },
            ready() {
                setCropperReady(cropper)
            },
        });
    }
    componentWillUnmount() {
        this.state.cropperInstance.destroy();
    }
    modalOnClose() {
        // this.setState({showCropModal: false, cropImage: null, cropperReady: false});
        this.props.onClose();
    }
    cropDoneOnClick(e) {
        e.preventDefault();
        this.setState({ isSubmitting: true })
        this.state.cropperInstance.getCroppedCanvas().toBlob((blob) => {
            this.props.onDone(blob);
        })
    }
    render() {
        let showCloseButton = this.props.showCloseButton;
        let modalOnClose = this.modalOnClose;
        if (!showCloseButton){
            modalOnClose = ()=>{};
        }
        return (
            <div>
                <Modal showCloseButton onCloseButtonClick={this.modalOnClose}>
                    <div className="cropper-wrapper">
                        <div className="cropper-content">
                            <h3>Tilpass bilde for mobil</h3>
                            {!this.state.cropperReady && <div className="d-flex justify-content-center" >
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>}
                            <div style={{opacity: this.state.cropperReady ? 100 : 0, width: "300px", height: "300px"}}>
                                <img id="image" src={this.props.image.preview}/>
                            </div>
                            {this.props.indicator && this.props.indicator}
                            {<GrayOutlineButton text="cancel" onClick={this.modalOnClose} />} 
                            <button type="button" className="btn btn-secondary w-100 mt-4 mb-6" onClick={this.cropDoneOnClick} disabled={this.state.isSubmitting}>
                                {!this.state.isSubmitting && 'Neste'}
                                {this.state.isSubmitting && <span> <span
                                    className="spinner-border spinner-border-sm" role="status"
                                    aria-hidden="true"></span> Loading...</span>}
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ImageCropper;
