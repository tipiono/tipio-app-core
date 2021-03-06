import React from 'react';

const RemoveImageIcon = () => {
    return (
        <svg width={32} height={32}>
            <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                <circle
                    stroke="#C9CFD3"
                    strokeWidth={0.5}
                    fill="#000"
                    cx={15}
                    cy={15}
                    r={15}
                />
                <path
                    d="M16.05 14.68l4.582-4.608a.738.738 0 00-1.043-1.043l-4.583 4.589-4.582-4.59a.738.738 0 10-1.043 1.044l4.582 4.608-4.582 4.557a.736.736 0 00.521 1.26.736.736 0 00.522-.217l4.582-4.582 4.583 4.582c.14.138.328.216.525.218a.742.742 0 00.518-1.28L16.05 14.68z"
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

export default RemoveImageIcon;
