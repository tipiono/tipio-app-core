import React, {useState} from 'react';
import PropTypes from "prop-types";
import CategoryItemWithDropdown from "./Categories";
import Checkbox from '../../../UI/Forms/Checkbox';
import InteriorIcon from "../../../UI/Icons/InteriorIcon";
import ArrowDownIcon from "../../../UI/Icons/ArrowDownIcon";

function dropdown() {
}

const SubCategories = ({sub_categories, onClick, subSubCategoryOnClick, withCheckbox, onChange, selectedMap}) => {
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
                        <li className="sub-category-item" key={item.id}>
                            <a className="sub-category-link" href="#" onClick={() => {
                                subCategoryOnClick(item);
                                onClick(item);
                            }}>{item.title}</a>
                        </li>
                        {showSubSubcategories === item.id && item.sub_categories && <ul className="sub-sub-categories ">
                            {
                                item.sub_categories.map((c) => {
                                    return (
                                        <li key={c.id} className="sub-sub-category-item">
                                            {/*{withCheckbox && (<Checkbox id={c.id} onChange={onChange} value={c.id}*/}
                                            {/*                            checked={selectedMap[c.id]}/>)}*/}
                                            <a href="#" className="sub-sub-category-link" onClick={() => {
                                                onClick(c);
                                            }}>{c.title}
                                            </a>
                                        </li>
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

const CategoryItem = ({id, title, icon, onSelect, active, sub_categories, onClick, subCategoriesOnClick, withCheckbox, onChange, selectedMap}) => {
    return (<div className="category-item dropdown">
            <div className="d-flex align-items-center">
                {withCheckbox && (<Checkbox id={id} onChange={onChange} value={id} checked={selectedMap[id]}/>)}
                <a className={'category-link d-flex align-items-center ' + (active ? 'active' : '')} href="#"
                   onClick={(e) => {
                       e.preventDefault();
                       onClick();
                   }}>

                    <div className="category-left-icon">
                        <InteriorIcon/>
                    </div>

                    <span>{title}</span>

                    <div className="category-right-icon">
                        <ArrowDownIcon/>
                    </div>
                </a>
            </div>
            {active && <SubCategories sub_categories={sub_categories} onClick={(item) => {
                subCategoriesOnClick(item)
            }} withCheckbox={withCheckbox} onChange={onChange} selectedMap={selectedMap}/>}
        </div>
    )

};
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default CategoryItem;
