import React from 'react';
import {
    TipioCountdown,
} from 'tipio-app-core';

function TipioOfTheDay({
    children,
    title,
    subtitle,
    voting_expires_in,
    images,
    voteOnClick,
    shareOnClick,
    joined,
    onClick
 }) {

    return (
        <div className="tipioOfTheDay">
            <a
                href=""
                onClick={onClick}
                className="tipioOfTheDay__preview"
            >
                <img
                    className="tipioOfTheDay__preview--image"
                    src={images && images.length && images[0].blob_url}
                    alt=""
                />

                <div className="tipioOfTheDay__preview--timeLeft">
                    <TipioCountdown className="timer" expires_in={voting_expires_in}/>
                </div>
            </a>

            <div className="tipioOfTheDay__content">
                <a href="/" className="tipioOfTheDay__content--title" onClick={onClick}>{title}</a>

                <p className="tipioOfTheDay__content--description">{subtitle}</p>

                {children}
            </div>
        </div>
    );
}
export default TipioOfTheDay;

