import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default React.forwardRef(({ id, label, name, errors, displayErrors, children, ...props }, ref) => (
    <>
        <div className="md-checkbox">
            <input type="checkbox" id={id} name={name} {...props} ref={ref} />
            <label htmlFor={id}>{label}</label>
            {children}
        </div>
        {displayErrors && errors && errors[name] && <ErrorMessage content={errors[name].message} color={'bg-red'} />}
    </>
));
