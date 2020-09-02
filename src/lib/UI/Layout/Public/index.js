import React from 'react';
import Navigation from '../Navigation/index';
import Footer from '../Footer';

function PublicLayout({ children, ...props }) {
    return (
        <>
            <header className="header">
                <Navigation {...props} />
            </header>
            <main className="main">{children}</main>
            {props.showFooter && <Footer />}
        </>
    );
}

export default PublicLayout;
