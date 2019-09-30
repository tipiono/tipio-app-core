import React from 'react';

export default function ({ label }) {
    return (
        <>
            <label className="pure-material-textfield-outlined price-input">
                <input placeholder="50" type="number" id="subdomain"/>

                <label className="outside-label">{label}</label>

                <p className="static-placeholder">Kr</p>
            </label>
        </>
    );
}
