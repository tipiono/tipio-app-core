import React from 'react';

function ToggleSwitch({ name, checked, onChange }) {
    return (
        <>
            <div className="material-toggle">
                <input id={name} name={name} type="checkbox" checked={checked} onChange={onChange} />
                <label htmlFor={name} className="label-red"/>
            </div>
        </>
    )
}

export default ToggleSwitch;
