import React from 'react';

const Overlay = ({ onClick }) => {
    return (
        <a onClick={(e)=>{e.preventDefault(); onClick();}}>
            <div className="overlay show" />
        </a>
    );
};

export default Overlay;
