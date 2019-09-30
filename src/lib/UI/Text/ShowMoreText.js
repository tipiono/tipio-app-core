import React from 'react';
import { Accordion } from '../Accordion/Accordion';
import formatText from '../../Util/formatText';

function ShowMoreText({ text }) {
    
    const { textFormatted, restFormatted } = formatText(text, (item, key) => (<li key={key}>{item}</li>), <br />);
    return  (
        <div className="tipio-description d-none d-lg-block">
            <div className="tipio-content">
                    <ul>
                       {textFormatted}
                    </ul>
            </div>
            {restFormatted && (
                <div className="tipio-show-more">
                    <Accordion>
                        <div title="Les mer" titleOnShow="Read less">
                            <ul>
                                {restFormatted}
                            </ul>
                        </div>
                    </Accordion>
                </div>
            )}
        </div>
    )
}
export default ShowMoreText;