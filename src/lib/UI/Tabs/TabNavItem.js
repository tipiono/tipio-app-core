import React from 'react';
import cx from 'classnames';

export default function TabNavItem({ children, isActive, ...props }) {
    return (
        <li {...props} className="tab__item">
            <a className={cx('tab__item--link', { 'active': isActive })}>{ children }</a>
        </li>
    );
}
