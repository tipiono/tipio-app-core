import React from 'react';
import FormatText from '../../Util/formatText';

export default function({ description }) {
    if (description) {
        const { textFormatted, restFormatted } = FormatText(
            description,
            (item, key) => <li key={key + ' ' + item}>{item}</li>,
            <br />
        );
        return [textFormatted, restFormatted];
    }
    return null;
}
// CHANGE
