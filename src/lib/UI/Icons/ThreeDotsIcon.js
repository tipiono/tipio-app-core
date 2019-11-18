import React from 'react';

const ThreeDotsIcon = () => {
    return (
        <>
            <svg width={18} height={4}>
                <g transform="translate(0 .4)" fill="#5C6265" fillRule="evenodd">
                    <ellipse cx={1.625} cy={1.44} rx={1.625} ry={1.44}/>
                    <ellipse cx={8.938} cy={1.44} rx={1.625} ry={1.44}/>
                    <ellipse cx={16.251} cy={1.44} rx={1.625} ry={1.44}/>
                </g>
            </svg>
        </>
    );
};

export default ThreeDotsIcon;
