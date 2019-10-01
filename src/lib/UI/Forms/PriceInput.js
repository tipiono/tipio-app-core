import React from 'react';

export default React.forwardRef(({ label, name, errors, ...props }, ref) => (
    <>
            <label className="pure-material-textfield-outlined price-input">
                <input placeholder="50" type="number" name={name} id={name} {...props} ref={ref} />
                <label className="outside-label">{label}</label>
                <p className="static-placeholder">Kr</p>
            </label>
            {errors && errors[name] && errors[name].message}
    </>
));