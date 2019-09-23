import React from 'react';

export default React.forwardRef(({ id, label, name, errors, ...props }, ref) => (
    <>
        <div className="md-checkbox">
            <input type="checkbox" id={id} name={name} {...props} ref={ref} />
            <label htmlFor={id}>{label}</label>
        </div>
        {errors && errors[name] && errors[name].message}
    </>
));