import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import cx from 'classnames';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TipioCountdown from '../TipioCountdown/TipioCountdown';
import { createDiscountLabel } from '../../Util/calculateDiscountPercentage';
import NafMembership from '../Logo/NafMemberShip';

const ImageSlider = ({
    images,
    showThumbs,
    showTimer,
    tipio_expires_in,
    onClick,
    costPrice,
    salePrice,
    showSaleDiscountBottom,
    soldOut,
    hasNafMembership
}) => {
    const YoutubeSlide = ({ url, isSelected }) => <ReactPlayer width="100%" url={url} playing={isSelected} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.match(/youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/)[1];

    let imageSrc = [];
    images.map((image) => {
        if (image.blob_url) {
            imageSrc.push(image.blob_url);
        } else {
            const videoId = getVideoId(image.url);
            if (videoId) {
                imageSrc.push(getVideoThumb(videoId));
            }
        }
    });

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
                    images && { removeMargin: images.length < 5 },
                    images && { removeBottomMargin: images.length === 1 }
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
                    useKeyboardArrows={true}
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
                {costPrice && salePrice && (
                    <span className="imageSlider__discount">{createDiscountLabel(costPrice, salePrice)}</span>
                )}
                {showTimer && tipio_expires_in && (
                    <>
                        {!showSaleDiscountBottom && (
                            <div className="imageSlider__countDown">
                                <TipioCountdown
                                    className="timer"
                                    expires_in={tipio_expires_in}
                                    soldOut={soldOut ? true : false}
                                />
                            </div>
                        )}
                    </>
                )}
                {hasNafMembership && (
                    <div className="imageSlider__membership">
                        <NafMembership />
                    </div>
                )}
            </div>
        </>
    );
};

export default ImageSlider;
