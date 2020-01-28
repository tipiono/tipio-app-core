import React from 'react';
import Navigation from '../Navigation/index';

function PublicLayout({ children, ...props }) {
    return (
        <>
            <header className="header">
                <Navigation {...props}/>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="customFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-11 mx-auto">
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <div className="customFooter__list">
                                    <h5 className="customFooter__list__title">Kontakt oss</h5>
                                    <ul className="customFooter__list__content">
                                        <li><a className="customFooter__list__content__link"
                                            href="https://goo.gl/maps/UdKQacRovy4guaYW9" target="_blank">Møllergata
                                         4,
                                        0179 Oslo</a></li>
                                        <li><a className="customFooter__list__content__link"
                                            href="tel:+47 987 65 456">+47
                                        987 65 456</a></li>
                                        <li><a className="customFooter__list__content__link"
                                            href="mailto:post@tipio.no">post@tipio.no</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <div className="customFooter__list">
                                    <h5 className="customFooter__list__title">Følg Tipio</h5>
                                    <ul className="customFooter__list__content">
                                        <li><a className="customFooter__list__content__link"
                                            href="https://www.facebook.com/">Facebook</a></li>
                                        <li><a className="customFooter__list__content__link"
                                            href="https://instagram.com/">Instagram</a></li>
                                        <li><a className="customFooter__list__content__link"
                                            href="https://www.linkedin.com/">Linkedin</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <p className="customFooter__description">Hvorfor kjøpe dyrt alene når vi kan handle
                                    billig
                                    sammen?
                                <br />
                                    <p></p>
                                    I Tipio kan du fortelle butikkene hva du ønsker å få en bedre pris på.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default PublicLayout;
