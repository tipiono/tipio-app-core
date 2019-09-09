import React from 'react';
import PropTypes from "prop-types";

const CategoryItem = ({ title, icon, onSelect, selected, sub_categories }) => (
    <div className='category-item select'>
        <a className={'category-link ' + (selected ? 'selected' : '')} href="#" onClick={onSelect}>
            <svg className="category-left-icon" width="26" height="26" viewBox="0 0 26 26">
                <g fill="#5C6265" fillRule="nonzero">
                    <path d="M18.597 18a.6.6 0 0 1 .588.482l.73 3.647A2.328 2.328 0 0 0 22.197 24c.994 0 1.8-.806 1.803-1.74L22.797 10.2a3 3 0 0 0-3-3h-14.4c-1.657 0-3 1.343-3.003 3.06L1.197 22.2a1.8 1.8 0 0 0 1.8 1.8c1.11 0 2.065-.783 2.282-1.871l.73-3.647A.6.6 0 0 1 6.597 18h12zM7.089 19.2l-.633 3.164A3.528 3.528 0 0 1 2.997 25.2c-1.657 0-3-1.343-2.997-3.06L1.197 10.2a4.2 4.2 0 0 1 4.2-4.2h14.4c2.32 0 4.2 1.88 4.197 4.14l1.203 12.06a3 3 0 0 1-3 3 3.528 3.528 0 0 1-3.459-2.836l-.633-3.164H7.09z"/>
                    <path d="M7.2 12H9a.6.6 0 1 1 0 1.2H7.2V15A.6.6 0 1 1 6 15v-1.8H4.2a.6.6 0 1 1 0-1.2H6v-1.8a.6.6 0 1 1 1.2 0V12zM12 .6v6a.6.6 0 1 0 1.2 0v-6a.6.6 0 1 0-1.2 0zM18 10.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm0 4.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm-2.4-2.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4.8 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"/>
                </g>
            </svg>
            <span>{title}</span>
            <svg className="category-right-icon" width="20" height="20" viewBox="0 0 24 24">
                <g className="nc-icon-wrapper" strokeLinecap="round" strokeLinejoin="round"
                   strokeWidth="2" fill="#371e1e" stroke="#371e1e">
                    <polyline data-color="color-2" fill="none" strokeMiterlimit="10"
                              points=" 6,12 10,16 18,8 " />
                    <circle fill="none" stroke="#371e1e" strokeMiterlimit="10" cx="12" cy="12"
                            r="11" />
                </g>
            </svg>
        </a>
    </div>
);
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default CategoryItem;
