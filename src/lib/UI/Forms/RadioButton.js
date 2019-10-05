import React from 'react';

function RadioButton({ id, text }) {
    return (
        <>
            <div className="md-radio">
                <input id={id} type="radio" name={id} />
                <label htmlFor={id}>{text}</label>
            </div>
        </>
    )
}

export default RadioButton;
