import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import cx from 'classnames';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TipioCountdown from '../TipioCountdown/TipioCountdown';

const ImageSlider = ({ images, showThumbs, showTimer, tipio_expires_in, onClick, hasVideo = false }) => {
    const YoutubeSlide = ({ url, isSelected }) => <ReactPlayer width="100%" url={url} playing={isSelected} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/watch?v='.length, url.length);

    let imageSrc = [];
    images.map((image) => {
        imageSrc.push(image.blob_url);
    });
    if (hasVideo) {
        const videoId = getVideoId('https://www.youtube.com/watch?v=VeT16PSVjLE');
        if (videoId) {
            imageSrc.push(getVideoThumb(videoId));
        }
    }

    const customRenderThumb = () => {
        return imageSrc.map((item) => {
            return <img src={item} />;
        });
    };

    return (
        <>
            <div
                className={cx(
                    'imageSlider',
                    images && { showIndicators: images.length >= 5 },
                    images && { removeMargin: images.length < 5 }
                )}
            >
                <Carousel
                    showIndicators={images.length >= 2}
                    showArrows={images.length >= 5}
                    showStatus={false}
                    showThumbs={showThumbs}
                    infiniteLoop
                    renderBottomCenterControls={false}
                    swipeScrollTolerance={40}
                    onClickItem={onClick && onClick}
                    renderThumbs={customRenderThumb}
                >
                    {images && images.map((item, i) => <img src={item.blob_url} alt="..." key={i} />)}
                    {hasVideo && <YoutubeSlide key="youtube-1" url="https://www.youtube.com/watch?v=VeT16PSVjLE" />}
                </Carousel>
                {showTimer && tipio_expires_in && (
                    <div className="imageSlider__countDown">
                        <TipioCountdown className="timer" expires_in={tipio_expires_in} />
                    </div>
                )}
            </div>
        </>
    );
};

export default ImageSlider;
