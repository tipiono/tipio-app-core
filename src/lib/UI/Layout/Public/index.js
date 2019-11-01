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
            <footer className="footer">
            </footer>
        </>
    );
}

export default PublicLayout;
