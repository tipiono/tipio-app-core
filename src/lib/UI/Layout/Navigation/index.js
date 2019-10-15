import React from 'react';
import Logo from './Logo';

import BusinessPrivateNavigationItems from './BusinessPrivateNavigationItems';
import HamburgerMenu from './HamburgerMenu';

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

                            <li className="nav-list-item">
                                <span className="text-white">Search</span>
                            </li>

                            <li className="nav-list-item">
                                <svg className="mr-2" width={25} height={20}>
                                    <g fill="#FFF" fillRule="nonzero">
                                        <path
                                            d="M8.88 5.579c-.363 2.052-2.097 3.615-4.192 3.615C2.327 9.194.426 7.211.426 4.78S2.326.364 4.688.364c2.095 0 3.829 1.563 4.192 3.615H23.7a.8.8 0 110 1.6H8.88zm-1.398-.8c0-1.635-1.258-2.948-2.794-2.948-1.537 0-2.795 1.313-2.795 2.948s1.258 2.948 2.795 2.948c1.536 0 2.794-1.313 2.794-2.948zM8.238 15.898H1.16a.8.8 0 110-1.6h7.078c.362-2.052 2.096-3.615 4.191-3.615 2.12 0 3.868 1.598 4.204 3.684h7.132a.8.8 0 110 1.6h-7.156c-.39 2.018-2.107 3.546-4.18 3.546-2.095 0-3.829-1.563-4.191-3.615zm6.978-.573a.804.804 0 01.006-.344c-.059-1.58-1.293-2.83-2.793-2.83-1.536 0-2.794 1.312-2.794 2.947s1.258 2.948 2.794 2.948c1.465 0 2.677-1.194 2.787-2.721z"/>
                                    </g>
                                </svg>
                                <span className="text-white">Filters</span>
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
