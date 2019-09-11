import React from 'react';

function RadioButton({}) {
    return (
        <>
            <div className="md-radio">
                <input id="1" type="radio" name="g" checked/>
                <label htmlFor="1">Option 1</label>
            </div>
        </>
    )
}

export default RadioButton;
