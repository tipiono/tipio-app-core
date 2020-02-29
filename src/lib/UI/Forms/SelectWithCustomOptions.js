import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Select({ placeholder, options, label, onChange, defaultValue, displayErrors, errors, name }) {
    //const [value, setValue] = useState({ value: defaultValue, label: defaultValue} || false);

    const _onChange = (v) => {
        // onChange(v || { value: 1, label: 1})
    };
    return (

        <div className="custom-material-select">
            <label className="select-label">{label}</label>
            <CreatableSelect
                isClearable
                value={{ value: defaultValue, label: defaultValue }}
                onChange={_onChange}
                options={options.map(x => ({ value: x, label: x }))}
                placeholder={placeholder || '-'}
            />

            {/*{displayErrors && errors && errors[name] &&*/}
            {/*<ErrorMessage*/}
            {/*    content={errors[name].message || errors[name]}*/}
            {/*    color={"bg-red"}*/}
            {/*/>*/}
            {/*}*/}

        </div>
    )
}

Select.defaultProps = {
};

Select.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired
};

export default Select;