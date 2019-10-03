import React from 'react';

export default React.forwardRef(({ from, to, label, name, errors, ...props }, ref) => (
    <> {console.log(props.paddingLeft)}
        <label className="pure-material-textfield-outlined from-to-input">
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
            {errors && errors[name] && errors[name].message}
    </>
));
