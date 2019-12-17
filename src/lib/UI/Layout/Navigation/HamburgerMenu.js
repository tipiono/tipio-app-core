import React from "react";
import cx from "classnames";
import Overlay from "../../Overlay/Overlay";
import { DropDown, DropDownItem } from "../../DdropDown/DropDown";

function HamburgerMenu(props) {
    const { menuVisible, toggleMenu, items, logedIn } = props;

    return (
        <>
            {menuVisible && (
                <Overlay onClick={toggleMenu} opacity={0.5} top="88px" />
            )}
            <li className="nav-list-item">
                <span>
                    <a
                        href="#"
                        className={cx("hamburger-button", {
                            show: menuVisible
                        })}
                        onClick={e => {
                            e.preventDefault();
                            toggleMenu();
                        }}>
                        Menu
                    </a>
                </span>
                {menuVisible && (
                    <div className="menu-content show">
                        <ul className="tab-content">
                            {items &&
                                items.map(x => {
                                    if (
                                        x.shouldDisplay &&
                                        !x.shouldDisplay({ logedIn })
                                    ) {
                                        return null;
                                    }
                                    if (x.sub_items) {
                                        return (
                                            <li
                                                key={x.name}
                                                className="nav-item">
                                                <DropDown
                                                    title={"Mine Tipioer"}>
                                                    {x.sub_items.map(y => (
                                                        <DropDownItem
                                                            key={y.name}>
                                                            <a
                                                                to="/"
                                                                onClick={e => {
                                                                    e.preventDefault();
                                                                    props.menuItemOnClick(
                                                                        y
                                                                    );
                                                                }}>
                                                                {y.name}
                                                            </a>
                                                        </DropDownItem>
                                                    ))}
                                                </DropDown>
                                            </li>
                                        );
                                    } else {
                                        const logoutItem = x.name === "Logg ut";
                                        return (
                                            <li
                                                key={x.name}
                                                className={cx({
                                                    "nav-item": items.sub_items,
                                                    "nav-item-logout": logoutItem
                                                })}>
                                                <a
                                                    href="/tipio/new"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        props.menuItemOnClick(
                                                            x
                                                        );
                                                    }}>
                                                    {x.name}
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
