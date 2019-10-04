import React from 'react';

function RadioButton({text}) {
    return (
        <>
            <div className="md-radio">
                <input id="1" type="radio" name="g" checked/>
                <label htmlFor="1">{text}</label>
            </div>
        </>
    )
}

export default RadioButton;
