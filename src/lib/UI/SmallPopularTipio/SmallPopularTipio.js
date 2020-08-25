import React from 'react';
import TipioCountdown from '../TipioCountdown/TipioCountdown';

const SmallPopularTipio = ({ id, children, title, binding_expires_in, images, brand, subtitle, type, onClick }) => {
    return (
        <div className="smallPopularTipio">
            <div className="smallPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="smallPopularTipio__preview--image lazyload"
                    src={images && images.length && images[0].blob_url}
                    alt=""
                />
                {type === 2 && (
                    <div className="smallPopularTipio__preview--timeLeft">
                        <TipioCountdown className="timer" expires_in={binding_expires_in} />
                    </div>
                )}
            </div>

            <div className="smallPopularTipio__content">
                <a
                    href={`/tipio/${type === 2 ? 'bind' : 'vote'}/${id}`}
                    onClick={onClick}
                    className="text-truncate smallPopularTipio__content--title"
                    title={title}
                >
                    {title}
                </a>
                <p className="text-truncate smallPopularTipio__content--description" title={brand ? brand : subtitle}>
                    {brand ? brand : subtitle}{' '}
                </p>

                {children}
            </div>
        </div>
    );
};

export default SmallPopularTipio;
