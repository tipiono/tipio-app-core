import React from 'react';

export default function ({ from, to, label }) {
    return (
        <>
            <label className="pure-material-textfield-outlined from-to-input">
                <input placeholder={to} type="number" id="subdomain"/>
                <label className="outside-label">{label}</label>
                <span className="inside-label">Fra</span>
                <p className="static-placeholder">{from} -</p>
            </label>
        </>
    );
}
