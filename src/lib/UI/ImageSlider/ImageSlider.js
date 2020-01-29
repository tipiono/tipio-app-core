import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cx from 'classnames';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TipioCountdown from '../TipioCountdown/TipioCountdown';

function ImageSlider({ images, showThumbs, showTimer, tipio_expires_in }) {
    return <>
        <div className={cx('imageSlider', images && { showIndicators: images.length >= 4 }, { removeMargin: images.length < 4 })}>
            <Carousel
                showIndicators={true}
                showArrows={false}
                showStatus={false}
                showThumbs={showThumbs}
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
