import React from 'react';
import PropTypes from 'prop-types';

const SelectedCategory = ({onClick, title}) => (
    <div className="selected-category">
        <button type="button" className="btn-with-icon" onClick={onClick}>
            <span>{title}</span>

            <svg className="" width="20" height="20" viewBox="0 0 24 24">
                <g className="nc-icon-wrapper" strokeLinecap="round" strokeLinejoin="round"
                   strokeWidth="2" fill="#4ABCAC" stroke="#4ABCAC">
                    <polyline data-color="color-2" fill="none" strokeMiterlimit="10"
                              points=" 6,12 10,16 18,8 "/>
                    <circle fill="none" stroke="#4ABCAC" strokeMiterlimit="10" cx="12" cy="12"
                            r="11"/>
                </g>
            </svg>

        </button>
    </div>
);
SelectedCategory.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};
export default SelectedCategory;
