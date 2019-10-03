import React from 'react';

const IconButton = ({text, ...props}) => {
    return (
            <a className="iconButton" href="" {...props}>
                <svg className="iconButton--plus" width={24} height={24}><path d="M12 0a12 12 0 1012 12A12.035 12.035 0 0012 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5z" fill="#4abcac"/></svg>
                <span className="iconButton--text">{text}</span>
            </a>
    );
};

export default IconButton;
