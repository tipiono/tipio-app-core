import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default React.forwardRef(({placeholder, name, errors, displayErrors, ...props}, ref) => (
    <>
        <label className="pure-material-textfield-outlined">
            <textarea rows="4" placeholder=" "  type="radio" name={name} {...props} ref={ref}/>
            <span className="label-sm">{placeholder}</span>
        </label>
        {displayErrors && errors && errors[name] && 
        <ErrorMessage
            content={errors[name].message}
            color={"bg-red"}
        />}
    </>
));

