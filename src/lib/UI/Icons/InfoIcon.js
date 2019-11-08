import React from 'react';

const InfoIcon = () => {
    return (
        <>
            <svg width={48} height={48}>
                <g
                    className="prefix__nc-icon-wrapper"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="#e74298"
                    stroke="#e74298"
                >
                    <circle
                        data-color="color-2"
                        data-stroke="none"
                        cx={24}
                        cy={12}
                        r={1}
                        stroke="none"
                    />
                    <circle cx={24} cy={24} r={22} fill="none" strokeMiterlimit={10}/>
                    <circle
                        data-color="color-2"
                        cx={24}
                        cy={12}
                        r={1}
                        fill="none"
                        strokeMiterlimit={10}
                    />
                    <path
                        data-color="color-2"
                        fill="none"
                        strokeMiterlimit={10}
                        d="M24 19v17"
                    />
                </g>
            </svg>
        </>
    );
};

export default InfoIcon;
