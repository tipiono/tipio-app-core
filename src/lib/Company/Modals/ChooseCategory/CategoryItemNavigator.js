import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../UI/Forms/Checkbox';
import SvgInline from '../../../Hooks/svgInline';
import ArrowDownIcon from '../../../UI/Icons/ArrowDownIcon';

const CategoryItem = (props) => (
    <div className="category-item more">
        <div className="d-flex align-items-center">
            {props.withCheckbox && (
                <Checkbox
                    id={props.item.id}
                    onChange={props.onChange}
                    value={props.item.id}
                    checked={props.selectedMap[props.item.id]}
                />
            )}
            <span className={'category-link '} onClick={props.onClick}>
                <div className="category-left-icon">
                    {props.item.file_store && <SvgInline url={props.item.file_store.blob_url} />}
                </div>
                <span>{props.item.title}</span>

                <div className="category-right-icon">
                    <ArrowDownIcon />
                </div>
            </span>
        </div>
    </div>
);
CategoryItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    onSelect: PropTypes.func
};
export default CategoryItem;
