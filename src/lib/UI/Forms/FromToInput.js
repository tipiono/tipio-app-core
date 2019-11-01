import React from 'react';
import cx from 'classnames';

export default React.forwardRef(({ from, to, label, name, errors, ...props }, ref) => (
    <>
        <label className={cx("pure-material-textfield-outlined from-to-input", { validationError: errors && errors[name] })}>
                <input
                    placeholder={to}
                    type="number"
                    name={name}
                    id={name}
                    {...props}
                    ref={ref}
                    style={{
                        paddingLeft: props.paddingLeft ? `${props.paddingLeft + 55 + 8 + 5.328125}px` : '75px'
                    }}
                />
                <label className="outside-label">{label}</label>
                <span className="inside-label">Fra</span>
                <p className="static-placeholder">{from} -</p>
            </label>
           {/*<p className="small text-danger">{errors && errors[name] && errors[name].message}</p>*/}
    </>
));
