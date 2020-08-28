import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

function SelectWithSeperateValues({
    placeholder,
    options,
    label,
    onChange,
    defaultValue,
    YourOption = (_) => <></>,
    customOption = false
}) {
    const [value, setValue] = useState({ value: defaultValue, label: defaultValue } || false);

    const _onChange = (v) => {
        setValue(v);
        onChange(v);
    };

    const MyOption = (props) => {
        const { innerProps, innerRef, data, isFocused } = props;
        return (
            <div ref={innerRef} {...innerProps} style={{ backgroundColor: isFocused ? '#f5f5f5' : 'inherit' }}>
                <YourOption data={data} />
            </div>
        );
    };

    return (
        <div className="custom-material-select">
            <label className="select-label">{label}</label>
            <ReactSelect
                value={value}
                onChange={_onChange}
                options={options}
                isOptionDisabled={(option) => option.isdisabled} // disable an option
                components={customOption ? { Option: MyOption } : {}}
                placeholder={placeholder || '-'}
                isClearable={false}
            />
        </div>
    );
}

SelectWithSeperateValues.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired
};

export default SelectWithSeperateValues;
