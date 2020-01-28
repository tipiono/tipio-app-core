import React from 'react';
import cx from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default React.forwardRef(({ placeholder, name, errors, displayErrors, ...props }, ref) => (
    <>
        <label className={(cx("pure-material-textfield-outlined birthdayInput", { 'validationError': errors && errors[name] }))}>
            <input placeholder={props.value ? " " : "DD-MM-YYYY"} id={props.id || name} name={name} {...props} ref={ref} />
            <span className="label-sm">{placeholder}</span>
        </label>
        {displayErrors && errors && errors[name] &&
            <ErrorMessage
                content={errors[name].message || errors[name]}
                color={"bg-red"}
            />}
    </>
));