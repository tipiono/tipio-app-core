import React from 'react';

const NavBadge = ({count}) => {
    return (
        <>
            <span className="navBadge">{count}</span>
        </>
    );
};

export default NavBadge;