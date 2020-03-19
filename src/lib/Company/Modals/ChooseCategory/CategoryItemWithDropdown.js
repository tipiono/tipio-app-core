import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../UI/Forms/Checkbox';
import ArrowDownIcon from '../../../UI/Icons/ArrowDownIcon';
import SvgInline from '../../../Hooks/svgInline';
function dropdown() {}

const SubCategories = ({ sub_categories, onClick, subSubCategoryOnClick, withCheckbox, onChange, selectedMap }) => {
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
                            <a
                                className="sub-category-link"
                                href="#"
                                onClick={() => {
                                    subCategoryOnClick(item);
                                    onClick(item);
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                        {showSubSubcategories === item.id && item.sub_categories && (
                            <ul className="sub-sub-categories ">
                                {item.sub_categories.map((c) => {
                                    return (
                                        <li key={c.id} className="sub-sub-category-item">
                                            {/*{withCheckbox && (<Checkbox id={c.id} onChange={onChange} value={c.id}*/}
                                            {/*                            checked={selectedMap[c.id]}/>)}*/}
                                            <a
                                                href="#"
                                                className="sub-sub-category-link"
                                                onClick={() => {
                                                    onClick(c);
                                                }}
                                            >
                                                {c.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </>
                );
            })}
        </ul>
    );
};

const CategoryItem = ({
    id,
    title,
    icon,
    onSelect,
    active,
    sub_categories,
    onClick,
    subCategoriesOnClick,
    withCheckbox,
    onChange,
    selectedMap
}) => {
    return (
        <div className="category-item dropdown">
            <div className="d-flex align-items-center">
                {withCheckbox && <Checkbox id={id} onChange={onChange} value={id} checked={selectedMap[id]} />}
                <a
                    className={'category-link d-flex align-items-center ' + (active ? 'active' : '')}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onClick();
                    }}
                >
                    <div className="category-left-icon">
                        <SvgInline url={icon} />
                    </div>

                    <span>{title}</span>

                    <div className="category-right-icon">
                        <svg width={16} height={10} viewBox="0 0 16 10">
                            <path
                                d="M8.007 9.104a.907.907 0 01-.633-.26L.922 2.48a.904.904 0 011.26-1.296l5.825 5.76 5.825-5.76a.906.906 0 111.267 1.296L8.62 8.86a.893.893 0 01-.612.244z"
                                fill="#8C8F91"
                                fillRule="nonzero"
                            />
                        </svg>
                    </div>
                </a>
            </div>
            {active && (
                <SubCategories
                    sub_categories={sub_categories}
                    onClick={(item) => {
                        subCategoriesOnClick(item);
                    }}
                    withCheckbox={withCheckbox}
                    onChange={onChange}
                    selectedMap={selectedMap}
                />
            )}
        </div>
    );
};
CategoryItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    onSelect: PropTypes.func
};
export default CategoryItem;
