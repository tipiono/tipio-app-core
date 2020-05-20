import React from 'react';
import cx from 'classnames';
import Overlay from '../../Overlay/Overlay';
import { DropDown, DropDownItem } from '../../DdropDown/DropDown';

function HamburgerMenu(props) {
    const { menuVisible, toggleMenu, items, logedIn } = props;

    return (
        <>
            {menuVisible && <Overlay onClick={toggleMenu} opacity={0.5} top="88px" />}
            <li className="nav-list-item">
                <span>
                    <a
                        href="#"
                        className={cx('hamburger-button', {
                            show: menuVisible
                        })}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu();
                        }}
                    >
                        Menu
                    </a>
                </span>
                {menuVisible && (
                    <div className="menu-content show">
                        <ul className="tab-content company-menu-content">
                            {items &&
                                items.map((x) => {
                                    if (x.shouldDisplay && !x.shouldDisplay({ logedIn })) {
                                        return null;
                                    }
                                    if (x.sub_items) {
                                        return (
                                            <li key={x.name} className="nav-item">
                                                <DropDown title={'Mine Tipioer'}>
                                                    {x.sub_items.map((y) => (
                                                        <DropDownItem key={y.name}>
                                                            <a
                                                                to="/"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    props.menuItemOnClick(y);
                                                                }}
                                                            >
                                                                {y.name}
                                                            </a>
                                                        </DropDownItem>
                                                    ))}
                                                </DropDown>
                                            </li>
                                        );
                                    } else {
                                        {
                                            /* const logoutItem = x.name === "Logg ut"; */
                                        }
                                        return (
                                            <li
                                                key={x.name}
                                                id="nav-item"
                                                className={cx({
                                                    'nav-item': items.sub_items
                                                    // "nav-item-logout": logoutItem
                                                })}
                                            >
                                                <a
                                                    href="/tipio/new"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        props.menuItemOnClick(x);
                                                    }}
                                                >
                                                    <span className="nav-item__title">
                                                        {' '}
                                                        {x.showAddButton && (
                                                            <svg width={35} height={35} viewBox="0 0 35 35">
                                                                <g fill="none" fillRule="evenodd">
                                                                    <circle
                                                                        fill="#4ABCAC"
                                                                        cx={17.28}
                                                                        cy={17.28}
                                                                        r={17.28}
                                                                    />
                                                                    <path
                                                                        d="M17.06 10a.89.89 0 01.89.89v5.279h5.288a.89.89 0 010 1.781H17.95v5.288a.89.89 0 01-1.78 0l-.001-5.288H10.89a.89.89 0 010-1.78l5.279-.001V10.89a.89.89 0 01.891-.89z"
                                                                        fill="#381B81"
                                                                        fillRule="nonzero"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        )}
                                                        {x.name}
                                                    </span>
                                                </a>
                                            </li>
                                        );
                                    }
                                })}
                        </ul>
                    </div>
                )}
            </li>
        </>
    );
}

export default HamburgerMenu;
