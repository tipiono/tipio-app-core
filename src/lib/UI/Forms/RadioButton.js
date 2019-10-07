import React from 'react';

export default React.forwardRef(({id, text, name, errors, ...props}, ref) => (
    <>
        <div className="md-radio">
            <input id={id} type="radio" name={name} {...props} ref={ref}/>
            <label htmlFor={id}>{text}</label>
        </div>
        {errors && errors[name] && errors[name].message}
    </>
));
