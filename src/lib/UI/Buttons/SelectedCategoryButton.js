import React from 'react';

const SelectedCategoryButton = ({ onClick, title }) => {
    return (
        <div className="selected-category">
            <button type="button" className="btn-with-icon" onClick={onClick}>
                <span>{title}</span>
                <svg width={20} height={20} viewBox="0 0 24 24">
                    <g fill="none" stroke="#4ABCAC">
                        <path data-color="color-2" d="M6 12l4 4 8-8" />
                        <circle cx={12} cy={12} r={11} />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default SelectedCategoryButton;
