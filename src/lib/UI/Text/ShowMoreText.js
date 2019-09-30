import React, { useState } from 'react';
import formatText from '../../Util/formatText';

function ShowMoreText({ text }) {

    const { textFormatted, restFormatted } = formatText(text, (item, key) => (<li key={key}>{item}</li>), <br />);
    const [showMore, setShowMore] = useState(false);
    return  (
        <div className="tipio-description d-none d-lg-block">
            <div className="tipio-content">
                    <ul>
                       {textFormatted}
                    </ul>
            </div>
            {restFormatted && showMore && (
                <div className="tipio-show-more">
                    <div title="Les mer" titleOnShow="Read less">
                        <ul>
                            {restFormatted}
                        </ul>
                    </div>
                </div>
            )}
            {restFormatted && <a href="#" onClick={(e) => {e.preventDefault(); setShowMore(!showMore)}}> {showMore ? 'Show less' : 'Show more' } </a>}
        </div>
    )
}
export default ShowMoreText;
