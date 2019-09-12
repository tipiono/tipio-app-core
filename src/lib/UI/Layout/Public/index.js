import React from 'react';
import Navigation from '../Navigation/index';

function PublicLayout({ children }) {
    return (
        <>
            <header className="header">
                <Navigation />
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