import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';

function SelectWithSeperateValues({
    placeholder,
    options,
    label,
    onChange,
    defaultValue,
    displayErrors,
    errors,
    name
}) {
    const [value, setValue] = useState({ value: defaultValue, label: defaultValue } || false);

    const _onChange = (v) => {
        setValue(v);
        onChange(v);
    };
    return (
        <div className="custom-material-select">
            <label className="select-label">{label}</label>
            <ReactSelect
                value={value}
                onChange={_onChange}
                options={options.map((x) => ({ value: x.value, label: x.label }))}
                placeholder={placeholder || '-'}
                isClearable={false}
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

SelectWithSeperateValues.defaultProps = {};

SelectWithSeperateValues.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired
};

export default SelectWithSeperateValues;