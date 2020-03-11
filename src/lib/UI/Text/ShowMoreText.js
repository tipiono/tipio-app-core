import React, { useState } from 'react';
import formatText from '../../Util/formatText';

function ShowMoreText({ text }) {
    const { textFormatted, restFormatted } = formatText(
        text,
        (item, key) => <li key={key + '' + item}>{item}</li>,
        <br />
    );
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="productDetails__description">
            <ul>{textFormatted}</ul>

            {restFormatted && showMore && (
                <div className="tipio-show-more">
                    <div title="Les mer" titleOnShow="Read less">
                        <ul>{restFormatted}</ul>
                    </div>
                </div>
            )}
            {restFormatted && (
                <a
                    className="productDetails__description--showMore"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowMore(!showMore);
                    }}
                >
                    {' '}
                    {showMore ? 'Les mindre' : 'Les mer'}{' '}
                </a>
            )}
        </div>
    );
}

export default ShowMoreText;
