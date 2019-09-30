import React from 'react';

export default function ({ label }) {
    return (
        <>
            <label className="pure-material-textfield-outlined from-to-input">
                <input placeholder="50" type="number" id="subdomain"/>

                <label className="outside-label">{label}</label>
                <span className="inside-label">Fra</span>

                <p className="static-placeholder">1 -</p>
            </label>
        </>
    );
}
