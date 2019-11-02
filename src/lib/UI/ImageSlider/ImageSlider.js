import React from 'react';
import {Carousel} from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageSlider({images, showThumbs,}) {
    return <>
        <div className="imageSlider">

            <Carousel
                showIndicators={true}
                showArrows={false}
                showStatus={false}
                showThumbs={showThumbs}
            >
                {images && images.map((item) => (

                    <img src={item.blob_url} alt="..."/>
                ))}
            </Carousel>
        </div>
    </>
}

export default ImageSlider;
