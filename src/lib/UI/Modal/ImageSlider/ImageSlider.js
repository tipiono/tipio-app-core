import React from 'react';
import { Modal, ModalType } from '../../../UI/Modal/Modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageSliderModal({ onCloseButtonClick, images, selectedItem, ...props }) {
    return (
        <>
            <Modal showCloseButton onCloseButtonClick={onCloseButtonClick} type={ModalType.XLARGE} {...props}>
                <div className="imageSlider__modal">
                    <div className="imageSlider">
                        <Carousel
                            showIndicators={images.length >= 2}
                            showArrows={images.length > 0}
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop
                            renderBottomCenterControls={false}
                            swipeScrollTolerance={40}
                            selectedItem={selectedItem}
                        >
                            {images && images.map((item, i) => <img src={item.blob_url} alt="..." key={i} />)}
                        </Carousel>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ImageSliderModal;
