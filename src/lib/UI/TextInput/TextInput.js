import React from "react";
import PropTypes from 'prop-types';

import "./TextInput.scss";

const TextInput = ({ value, placeholder, label, onChange, onBlur}) => (
    <div className="form-group">
        <label className="pure-material-textfield-outlined">
            <input placeholder={placeholder}
                   type="text"
                   className="form-control form-control-lg"
                   id="ProductTitle"
                   value={value}
                   name="title"
                   onChange={onChange}
                   onBlur={onBlur}/>
            <span className="label-sm">{label}</span>
        </label>
        {/*{this.props.errors.title && this.props.touched.title*/}
        {/*&& <InputValidationError error={this.props.errors.title}/>}*/}
    </div>
);

TextInput.defaultProps = {
};

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

export default TextInput;
