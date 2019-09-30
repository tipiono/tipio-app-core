import React from 'react';
import PropTypes from "prop-types";
import Checkbox from '../../../UI/Forms/Checkbox';
import InteriorIcon from "../../../UI/Icons/InteriorIcon";
import ArrowDownIcon from "../../../UI/Icons/ArrowDownIcon";

const CategoryItem = (props) => (
    <div className='category-item more'>
        <div className="d-flex align-items-center">


        {props.withCheckbox &&(
            <Checkbox
                id={props.item.id}
                onChange={props.onChange}
                value={props.item.id}
                checked={props.selectedMap[props.item.id]}
            />

        )}
        <a className={'category-link '} href="#" onClick={props.onClick}>
            {props.item.file_store &&  <div className="category-left-icon"><InteriorIcon/></div>}
            <span>{props.item.title}</span>

            <div className="category-right-icon">
                <ArrowDownIcon/>
            </div>
        </a>
        </div>
    </div>
);
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default CategoryItem;