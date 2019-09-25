import React from 'react';
import PropTypes from "prop-types";
import Checkbox from '../../../UI/Forms/Checkbox';

const CategoryItem = (props) => (
    <div className='category-item select'>
        <a className={'category-link '} href="#" onClick={props.onClick}>
            {props.withCheckbox &&(
                <Checkbox
                    id={props.item.id}
                    onChange={props.onChange}
                    value={props.item.id}
                    checked={props.selectedMap[props.item.id]}
                    />
            )}
            {props.item.file_store && <img src={props.item.file_store.blob_url} />}
            <span>{props.item.title}</span>
            <span> --> </span>
        </a>
    </div>
);
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default CategoryItem;
