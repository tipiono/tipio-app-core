import React from 'react';

export default React.forwardRef(({ placeholder, name, errors, ...props }, ref) => (
    <>
        <div className="form-group">
            <label className="pure-material-textfield-outlined">
                <input placeholder=" " id={props.id || name} name={name} {...props} ref={ref} />
                <span className="label-sm">{placeholder}</span>
            </label>
            {errors && errors[name] && errors[name].message}
        </div>
    </>
));
