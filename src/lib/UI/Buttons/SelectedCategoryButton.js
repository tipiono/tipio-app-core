import React from 'react';

const SelectedCategoryButton = ({ onClick, title }) => {
    return (
        <div className="selected-category">
            <button type="button" className="addCategoryButton" onClick={onClick}>
                <span>{title}</span>
                <svg width={23} height={23}>
                    <g fill="#8C8F91" fillRule="nonzero" stroke="#8C8F91" strokeWidth={0.6}>
                        <path d="M11.5 2a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0-1C17.299 1 22 5.701 22 11.5S17.299 22 11.5 22 1 17.299 1 11.5 5.701 1 11.5 1z" />
                        <path d="M12.026 10.974h3.68a.526.526 0 110 1.052h-3.68v3.68a.526.526 0 11-1.052 0v-3.68h-3.68a.526.526 0 110-1.052h3.68v-3.68a.526.526 0 111.052 0v3.68z" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default SelectedCategoryButton;
