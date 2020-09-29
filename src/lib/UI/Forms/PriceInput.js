import React from 'react';
import cx from 'classnames';

export default React.forwardRef(({ label, name, errors, disabled = false, ...props }, ref) => (
    <>
        <label
            className={cx('pure-material-textfield-outlined price-input', {
                validationError: errors && errors[name],
                disabled__input: disabled
            })}
        >
            <input placeholder="50" type="number" name={name} id={name} {...props} ref={ref} disabled={disabled} />
            <label className="outside-label">{label}</label>
            <p className="static-placeholder">Kr</p>
        </label>
        {/*<p className="small text-danger">{errors && errors[name] && errors[name].message}</p>*/}
    </>
));
