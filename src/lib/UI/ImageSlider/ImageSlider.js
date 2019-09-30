import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function ImageSlider({
    images,
    showThumbs,
}) {
    return <>
        <div className="tipio-gallery">
            <Carousel
                showIndicators
                showThumbs={showThumbs}
                showArrows={showThumbs}
            >
                {images && images.map((item) => (
                    <div>
                        <img src={item.blob_url} alt="..." />
                        {/* <div className="position-absolute"></div> */}
                        {/* <TipioCountdown expires_in={tipio.expires_in} /> */}
                    </div>
                ))}
            </Carousel>
        </div>
    </>
}

export default ImageSlider;