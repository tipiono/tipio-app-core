import React from 'react';

function Input({placeholder}) {
    return (
        <>
            <label className="pure-material-textfield-outlined">
                <textarea rows="4" placeholder=" "/>
                <span className="label-sm">{placeholder}</span>
            </label>
        </>
    )
}

export default Input;
