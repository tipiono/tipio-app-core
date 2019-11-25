import React from 'react';

const ExportIcon = () => {
    return (
        <div>
            <svg width={60} height={60}>
                <g fill="none" fillRule="evenodd">
                    <circle fill="#4ABCAC" cx={30} cy={30} r={30}/>
                    <path
                        d="M40.93 30.08l.015-.375a.998.998 0 011.995.015v7.649a4.822 4.822 0 01-4.821 4.822H22.823A4.822 4.822 0 0118 37.369v-7.664a.998.998 0 011.995.015v7.649a2.827 2.827 0 002.828 2.827h15.296a2.826 2.826 0 002.827-2.827v-7.29h-.016zM29.473 16.973v-.015a.998.998 0 011.995.015v15.439l3.404-3.404a.998.998 0 011.404 1.418l-5.1 5.098a.997.997 0 01-1.412 0l-5.096-5.096a.998.998 0 111.41-1.413l3.395 3.396V16.973z"
                        fill="#381B81"
                        fillRule="nonzero"
                    />
                </g>
            </svg>
        </div>
    );
};

export default ExportIcon;
