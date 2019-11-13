import React, {useState} from 'react';
import cx from 'classnames';

export function NewDropdown(props) {
    const [dropDownVisibility, setDropDownVisibility] = useState(false);
    const visible = props.controlled ? props.visible : dropDownVisibility;

    return (
        <div className={cx('dropdown', props.direction)}>
            <a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => {
                e.preventDefault();
                if (props.controlled) {
                    props.setDropDownVisibility(!props.visible);
                } else {
                    setDropDownVisibility(!dropDownVisibility);
                }
            }}>
                {props.title}
                {/*{props.afterTitle && props.afterTitle()}*/}
            </a>
            <div className={cx('dropdown-menu', props.aligned, { 'show': visible, 'd-none': !visible })}>
                {
                    React.Children.map(props.children, (child) => {
                        return child;
                    })
                }
            </div>
        </div>
    );
}

export function NewDropdownItem(props) {
    return (<a className="dropdown-item" href="#">{props.children}</a>)
}
