import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import nb from 'date-fns/locale/nb';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerSelect = ({ label, selectedDate, onChange, minDate, maxDate, dateFormat }) => {
    registerLocale('nb', nb);
    return (
        <div className="custom-material-select ">
            <label className="select-label">{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => onChange(date)}
                minDate={minDate}
                maxDate={maxDate}
                locale="nb"
                dateFormat={dateFormat}
            />
        </div>
    );
};

DatePickerSelect.defaultProps = {};

DatePickerSelect.propTypes = {
    label: PropTypes.string,
    selectedDate: PropTypes.Date,
    minDate: PropTypes.Date,
    maxDate: PropTypes.Date,
    dateFormat: PropTypes.string
};

export default DatePickerSelect;
