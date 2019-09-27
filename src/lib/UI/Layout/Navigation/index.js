import React from 'react';
import Logo from './Logo';

import BusinessPrivateNavigationItems from './BusinessPrivateNavigationItems';
import HamburgerMenu from './HamburgerMenu';

function Navigation({ children, ...props }) {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="nav-wrapper"><a className="logo mr-5" href="/">
                        <Logo />
                        </a>
                        <BusinessPrivateNavigationItems {...props} />
                        <HamburgerMenu {...props} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;