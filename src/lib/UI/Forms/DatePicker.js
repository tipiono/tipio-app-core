import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import nb from 'date-fns/locale/nb';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerSelect = ({ label, selectedDate, onChange, minDate, maxDate, dateFormat, filterDate }) => {
    registerLocale('nb', nb);
    return (
        <div className="custom-material-select ">
            <label className="select-label">{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => onChange(date)}
                minDate={minDate}
                filterDate={filterDate ? filterDate : null}
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
    selectedDate: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    dateFormat: PropTypes.string
};

export default DatePickerSelect;
