import React from 'react';

function Input({placeholder}) {
    return (
        <>
            <label className="pure-material-textfield-outlined">
                <input placeholder=" "/>
                <span className="label-sm">{placeholder}</span>
            </label>
        </>
    )
}

export default Input;
