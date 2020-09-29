import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import cx from 'classnames';
function Select({
    placeholder,
    options,
    label,
    onChange,
    defaultValue,
    displayErrors,
    errors,
    disabled = false,
    name
}) {
    const [value, setValue] = useState({ value: defaultValue, label: defaultValue } || false);

    const _onChange = (v) => {
        setValue(v);
        onChange(v);
    };
    return (
        <div
            className={cx('custom-material-select', {
                disabled__select: disabled
            })}
        >
            {label && <label className="select-label">{label}</label>}
            <ReactSelect
                value={value}
                onChange={_onChange}
                options={options.map((x) => ({ value: x, label: x }))}
                placeholder={placeholder || '-'}
                isClearable={false}
                // isDisabled={disabled}
            />

            {/*{displayErrors && errors && errors[name] &&*/}
            {/*<ErrorMessage*/}
            {/*    content={errors[name].message || errors[name]}*/}
            {/*    color={"bg-red"}*/}
            {/*/>*/}
            {/*}*/}
        </div>
    );
}

Select.defaultProps = {};

Select.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    label: PropTypes.string
};

export default Select;
