import React from 'react';

function ToggleSwitch({}) {
    return (
        <>
            <div className="material-toggle">
                <input id="MaterialToggle1" name="MaterialToggleRed" type="checkbox"/>
                <label htmlFor="MaterialToggle1" className="label-red"/>
                <span className="ml-3">Ja, gjerne!</span>
            </div>
        </>
    )
}

export default ToggleSwitch;
