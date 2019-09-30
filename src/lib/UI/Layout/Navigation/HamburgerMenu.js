import React from 'react';
import cx from 'classnames';

import { DropDown, DropDownItem } from '../../DdropDown/DropDown';

function HamburgerMenu(props) {

    const {
        menuVisible,
        toggleMenu,
        items
    } = props;

    return (
        <ul className="nav-list ml-auto">
            <li className="nav-list-item">
                <span>
                <a href="#"
                    className={cx('hamburger-button', { 'show' : menuVisible })}
                    onClick={toggleMenu}>Menu</a>
                </span>
                {menuVisible &&
                    <div className="menu-content show">
                        <ul className="tab-content">
                            {items && items.map(x => {
                                if (x.sub_items) {
                                    return <li className="nav-item">
                                         <DropDown title={'Mine Tipioer'} >
                                        {x.sub_items.map(y =>
                                            <DropDownItem>
                                                <a to="/" >{y.name}</a>
                                            </DropDownItem>
                                        )}
                                        </DropDown>
                                    </li>
                                } else{
                                    return (
                                        <li className={cx({'nav-item': items.sub_items})}>
                                            <a href="/tipio/new">
                                                {x.name}
                                            </a>
                                        </li>
                                    )
                                }
                            }
                            )}
                        </ul>
                    </div>
                }
            </li>
        </ul>
    )
}

export default HamburgerMenu;