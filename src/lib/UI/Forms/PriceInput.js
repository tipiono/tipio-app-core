import React from 'react';
import cx from 'classnames';

export default React.forwardRef(({ label, name, errors, ...props }, ref) => (
    <>
            <label className={(cx("pure-material-textfield-outlined price-input", { 'validationError': errors && errors[name] }))}>
                <input placeholder="50" type="number" name={name} id={name} {...props} ref={ref} />
                <label className="outside-label">{label}</label>
                <p className="static-placeholder">Kr</p>
            </label>
            {/*<p className="small text-danger">{errors && errors[name] && errors[name].message}</p>*/}
    </>
));
