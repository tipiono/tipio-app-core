import React from 'react';

export default React.forwardRef(({placeholder, name, errors, ...props}, ref) => (
    <>
        <label className="pure-material-textfield-outlined">
            <textarea rows="4" placeholder=" "  type="radio" name={name} {...props} ref={ref}/>
            <span className="label-sm">{placeholder}</span>
        </label>
        {errors && errors[name] && errors[name].message}
    </>
));

