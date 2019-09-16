import React from 'react';

export default React.forwardRef(({ label, name, errors, ...props }, ref) => (
    <>
        <div className="md-checkbox">
            <input type="checkbox" id="i2" name={name} {...props} ref={ref} />
            <label htmlFor="i2">{label}</label>
        </div>
        {errors && errors[name] && errors[name].message}
    </>
));