import React, {useState} from 'react';
import PropTypes from "prop-types";
import CategoryItemWithDropdown from "./Categories";

function dropdown() {
}

const SubCategories = ({ sub_categories, onClick, subSubCategoryOnClick }) => {
    let [showSubSubcategories, setShowSubSubcategories] = useState(0);
    function subCategoryOnClick(item) {
        let sci = 0;
        if (showSubSubcategories !== item.id) {
            sci = item.id;
        }
        setShowSubSubcategories(sci);
    }
    return (
        <ul className="sub-categories ">
            {sub_categories.map((item) => {
                return (
                    <>
                        <li className="sub-category-item">
                            <a className="sub-category-link" href="#" onClick={() => {subCategoryOnClick(item); onClick(item);}}>{item.title}</a>
                        </li>
                        {showSubSubcategories === item.id && item.sub_categories && <ul className="sub-sub-categories ">
                            {
                                item.sub_categories.map((c) => {
                                    return (
                                        <li className="sub-sub-category-item"><a href="#" className="sub-sub-category-link" onClick={() => {onClick(c);}}>{c.title}</a></li>
                                    );
                                })
                            }
                        </ul>}
                    </>
                );
            })}
        </ul>
    );
};

const CategoryItem = ({ title, icon, onSelect, active, sub_categories, onClick, subCategoriesOnClick }) => {
    return (<div className="category-item dropdown">
        <a className={'category-link ' + (active ? 'active' : '')} href="#" onClick={(e) => { e.preventDefault(); onClick();}}>
            <svg className="category-left-icon" width="26" height="26" viewBox="0 0 26 26">
                <g fill="#5C6265" fillRule="nonzero">
                    <path
                        d="M18.597 18a.6.6 0 0 1 .588.482l.73 3.647A2.328 2.328 0 0 0 22.197 24c.994 0 1.8-.806 1.803-1.74L22.797 10.2a3 3 0 0 0-3-3h-14.4c-1.657 0-3 1.343-3.003 3.06L1.197 22.2a1.8 1.8 0 0 0 1.8 1.8c1.11 0 2.065-.783 2.282-1.871l.73-3.647A.6.6 0 0 1 6.597 18h12zM7.089 19.2l-.633 3.164A3.528 3.528 0 0 1 2.997 25.2c-1.657 0-3-1.343-2.997-3.06L1.197 10.2a4.2 4.2 0 0 1 4.2-4.2h14.4c2.32 0 4.2 1.88 4.197 4.14l1.203 12.06a3 3 0 0 1-3 3 3.528 3.528 0 0 1-3.459-2.836l-.633-3.164H7.09z"/>
                    <path
                        d="M7.2 12H9a.6.6 0 1 1 0 1.2H7.2V15A.6.6 0 1 1 6 15v-1.8H4.2a.6.6 0 1 1 0-1.2H6v-1.8a.6.6 0 1 1 1.2 0V12zM12 .6v6a.6.6 0 1 0 1.2 0v-6a.6.6 0 1 0-1.2 0zM18 10.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm0 4.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm-2.4-2.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4.8 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"/>
                </g>
            </svg>
            <span>{title}</span>
            <svg className="category-right-icon" width="16px" viewBox="0 0 24 24">
                <g
                    className="nc-icon-wrapper"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="#8c8f91"
                    stroke="#8c8f91"
                >
                    <polyline fill="none" stroke="#8c8f91" strokeMiterlimit="10"
                              points="2,7 12,17 22,7 " transform="translate(0, 0)"/>
                </g>
            </svg>
        </a>
        {active && <SubCategories sub_categories={sub_categories} onClick={(item) =>{subCategoriesOnClick(item)}}/>}
    </div>)
};
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default CategoryItem;
