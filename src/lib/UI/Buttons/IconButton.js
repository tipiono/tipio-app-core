import React from 'react';
import cx from 'classnames';

const IconButton = ({ text, disabled = false, ...props }) => {
    return (
        <a
            className={cx('iconButton', {
                disabled__iconButton: disabled
            })}
            href=""
            {...props}
        >
            <svg className="iconButton--plus" width={30} height={30}>
                <g fill="none" fillRule="evenodd">
                    <circle fill="#4ABCAC" cx={15} cy={15} r={15} />
                    <path
                        d="M13.95 15.567H9.177a.805.805 0 010-1.61h4.773V9.184a.805.805 0 011.61 0v4.773h4.78a.805.805 0 010 1.61h-4.78v4.78a.805.805 0 01-1.61 0v-4.78z"
                        fill="#381B81"
                        fillRule="nonzero"
                    />
                </g>
            </svg>
            <span className="iconButton--text">{text}</span>
        </a>
    );
};

export default IconButton;
