import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';


function Select({placeholder, options, label}) {
    const [value, setValue] = useState(false);

    const _onChange = (v) => {
        setValue(v);
    };
    return (
        <div className={"custom-material-select "} >
            <label className="select-label">{label}</label>
            <ReactSelect
                value={value}
                onChange={_onChange}
                options={options.map(x => ({value: x, label: x}))}
                placeholder={placeholder || '-'}
                isClearable={false}
            />
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
