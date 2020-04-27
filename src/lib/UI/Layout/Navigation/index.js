import React from 'react';

import BusinessPrivateNavigationItems from './BusinessPrivateNavigationItems';
import HamburgerMenu from './HamburgerMenu';
import SearchInput from './SearchInput';
// import FilterIcon from '../../Icons/FilterIcon';
import Logo from '../../Logo/Logo';

function Navigation({ children, filterOnClick, ...props }) {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                        <a className="logo mr-5" href="/">
                            <Logo />
                        </a>
                        <BusinessPrivateNavigationItems {...props} />

                        <ul className="nav-list ml-auto">
                            <li className="nav-list-item d-flex align-items-center">
                                <SearchInput {...props} />
                            </li>

                            {/* {props.filterButtonVisible && (
                                <li className="nav-list-item">
                                    <a className="nav-list-link" href="" onClick={filterOnClick}>
                                        <FilterIcon />
                                        <span className="text-white">Filters</span>
                                    </a>
                                </li>
                            )} */}

                            <HamburgerMenu {...props} />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
