import React from 'react';
import Logo from './Logo';

import BusinessPrivateNavigationItems from './BusinessPrivateNavigationItems';
import HamburgerMenu from './HamburgerMenu';
import SearchInput from "./SearchInput";
import FilterIcon from "../../Icons/FilterIcon";

function Navigation({children, ...props}) {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                        <a className="logo mr-5" href="/">
                            <Logo/>
                        </a>
                        <BusinessPrivateNavigationItems {...props} />

                        <ul className="nav-list ml-auto">

                            <li className="nav-list-item d-flex align-items-center">
                                <SearchInput/>
                            </li>

                            <li className="nav-list-item">
                                <a href="">
                                    <FilterIcon/>
                                    <span className="text-white">Filters</span>
                                </a>
                            </li>

                            <HamburgerMenu {...props} />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
