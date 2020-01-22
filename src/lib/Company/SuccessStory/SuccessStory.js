import React from 'react';

function SuccessStory({
    title,
    subtitle,
    image,
    onClick
}) {
    return (
        <div className="successStory">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                href=""
                className="successStory__preview lazy-image"
                onClick={onClick}
            >
                <img
                    className="successStory__preview--image lazyload"
                    data-src={image}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
                    alt=""
                />
            </a>
            <div className="successStory__content">
                <a href="" onClick={onClick}><h1 className="successStory__content--title">{title}</h1></a>
                <p className="successStory__content--description">{subtitle}</p>
            </div>
        </div>
    );
};

export default SuccessStory;
