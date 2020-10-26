import React from 'react';
import { Modal, ModalType } from '../../../UI/Modal/Modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';

const ImageSliderModal = ({ onCloseButtonClick, images, selectedItem, ...props }) => {
    const YoutubeSlide = ({ url, isSelected }) => <ReactPlayer width="100%" url={url} playing={isSelected} />;
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
                            {images &&
                                images.map((item, i) => {
                                    if (item.blob_url) {
                                        return <img src={item.blob_url} alt="..." key={i} />;
                                    } else {
                                        return <YoutubeSlide key="youtube-1" url={item.url} />;
                                    }
                                })}
                        </Carousel>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ImageSliderModal;
