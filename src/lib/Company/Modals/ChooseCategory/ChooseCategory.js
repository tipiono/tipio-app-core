import React from 'react';
import PropTypes from "prop-types";
import SelectedCategory from "./SelectedCategory";

const ChooseCategory = ({ onClick, selectedCategory }) => (
    <>
        {!selectedCategory && <button type="button" className="btn-with-icon" onClick={onClick}>
            <span>Legg til kategori</span>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <g fill="#8C8F91" fillRule="nonzero" stroke="#8C8F91" strokeWidth=".2">
                    <path d="M11.5 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0-1C17.299 1 22 5.701 22 11.5S17.299 22 11.5 22 1 17.299 1 11.5 5.701 1 11.5 1z"/>
                    <path d="M12.026 10.974h3.68a.526.526 0 1 1 0 1.052h-3.68v3.68a.526.526 0 1 1-1.052 0v-3.68h-3.68a.526.526 0 1 1 0-1.052h3.68v-3.68a.526.526 0 1 1 1.052 0v3.68z"/>
                </g>
            </svg>
        </button>}
        {selectedCategory && <SelectedCategory onClick={onClick} title={selectedCategory.title}/>}
    </>
);
ChooseCategory.propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedCategory: PropTypes.object.isRequired
};
export default ChooseCategory;
