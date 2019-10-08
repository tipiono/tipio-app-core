import React from 'react';
import cx from 'classnames';

export default React.forwardRef(({placeholder, name, errors, ...props}, ref) => (
    <>
        <label className={(cx("pure-material-textfield-outlined ", { 'validationError': errors && errors[name] }))}>
            <input placeholder=" " id={props.id || name} name={name} {...props} ref={ref}/>
            <span className="label-sm">{placeholder}</span>
        </label>
        {/*{errors && errors[name] && errors[name].message}*/}
    </>
));
