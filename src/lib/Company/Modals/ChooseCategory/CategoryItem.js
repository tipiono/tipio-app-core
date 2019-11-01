import React from 'react';
import PropTypes from "prop-types";
import Checkbox from '../../../UI/Forms/Checkbox';
import InteriorIcon from "../../../UI/Icons/InteriorIcon";
import ReactSVG from 'react-svg/dist/index'

let svgUrl = "https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg";

const CategoryItem = ({ id, title, icon, onSelect, selected, sub_categories, withCheckbox, onChange, selectedMap }) => (
    <div className='category-item select'>
        {}
            {withCheckbox &&(
                <Checkbox
                    id={id}
                    onChange={onChange}
                    value={id}
                    checked={selectedMap[id]}
                />)}

        <a className={'category-link ' + (selected ? 'selected' : '')} href="#" onClick={onSelect}>

            <div className="category-left-icon">
                <InteriorIcon />
            </div>

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
