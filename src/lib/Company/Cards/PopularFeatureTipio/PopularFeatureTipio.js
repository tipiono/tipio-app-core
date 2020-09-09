import React from 'react';
import SecondaryOutlineButton from '../../../UI/Buttons/SecondaryOutlineButton';

const PopularFeatureTipio = ({ children, brand, binding_count, link, forceLoad = false, title, onClick, ...props }) => {
    return (
        <div className="mediumPopularTipio">
            <div className="mediumPopularTipio__preview lazy-image" onClick={onClick}>
                <img
                    className="mediumPopularTipio__preview--image lazyload"
                    src={props.images && props.images.length && props.images[0].blob_url}
                    alt=""
                />
            </div>

            <div className="mediumPopularTipio__content">
                <a
                    href={link}
                    onClick={onClick}
                    className="text-truncate mediumPopularTipio__content--title"
                    title={title}
                >
                    {title}
                </a>
                <p className="text-truncate mediumPopularTipio__content--description" title={brand}>
                    {brand}
                </p>

                <SecondaryOutlineButton text="Gi tilbud" onClick={onClick} />
            </div>
        </div>
    );
};

export default PopularFeatureTipio;
