import React from 'react';
import Logo from './Logo';

function Navigation({ children }) {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="nav-wrapper"><a className="logo mr-5" href="/">
                        <Logo />
                        </a>
                        {/*Visible only on lg*/}
                        <ul className="nav-list d-none d-md-block">
                            <li className="nav-list-item">
                                <a className="nav-list-link" href="#">Privat</a>
                            </li>
                            <li className="nav-list-item">
                                <a className="nav-list-link active" href="#">Bedrift</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;