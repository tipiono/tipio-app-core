import React from 'react';

function ToggleSwitch({ name, checked, onChange, ...props }) {
    return (
        <>
            <div className="material-toggle">
                <input id={name} name={name} type="checkbox" checked={checked} onChange={onChange} {...props} />
                <label htmlFor={name} className="label-red"/>
            </div>
        </>
    )
}

export default ToggleSwitch;
