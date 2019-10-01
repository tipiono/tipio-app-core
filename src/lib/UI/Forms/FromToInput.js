import React from 'react';

export default React.forwardRef(({ from, to, label, name, errors, ...props }, ref) => (
    <>
        <label className="pure-material-textfield-outlined from-to-input">
                <input placeholder={to} type="number" name={name} id={name} {...props} ref={ref} />
                <label className="outside-label">{label}</label>
                <span className="inside-label">Fra</span>
                <p className="static-placeholder">{from} -</p>
            </label>
            {errors && errors[name] && errors[name].message}
    </>
));