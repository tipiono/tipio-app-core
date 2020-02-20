import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cx from 'classnames';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TipioCountdown from '../TipioCountdown/TipioCountdown';

function ImageSlider({ images, showThumbs, showTimer, tipio_expires_in }) {
    return <>
        <div className={cx('imageSlider', images && { showIndicators: images.length >= 5 }, { removeMargin: images.length < 5 })}>
            <Carousel
                showIndicators={images.length >= 2}
                showArrows={images.length >= 5}
                showStatus={false}
                showThumbs={showThumbs}
                infiniteLoop
                renderBottomCenterControls={false}
            >
                {images && images.map((item) => (
                    <img src={item.blob_url} alt="..." />
                ))}
            </Carousel>
            {showTimer && (
                <div className="imageSlider__countDown">
                <TipioCountdown className="timer" expires_in={tipio_expires_in} />
            </div>
            )}
        </div>
    </>
}

export default ImageSlider;
