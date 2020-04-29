import React, { useState, useEffect } from 'react';
import cx from 'classnames';

const f = {
    Newest: 1,
    Popular: 2
};
const Filters = ({ onFilterChange, onFilterClick, active }) => {
    const [title, setTitle] = useState('Flere filtere');
    useEffect(() => {
        if (window.innerWidth <= 540) {
            setTitle('Filter');
        } else {
            setTitle('Flere filtere');
        }
    }, []);
    return (
        <div className="filters">
            <div
                className={cx('filters__item', { filter__active: 'latest' === active })}
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange('latest');
                }}
            >
                Nyeste
            </div>
            <div
                className={cx('filters__item', { filter__active: 'popular' === active })}
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange('popular');
                }}
            >
                Populære
            </div>
            <div
                className="filters__item"
                onClick={(e) => {
                    e.preventDefault();
                    onFilterClick();
                }}
            >
                <svg width={11} height={9} viewBox="0 0 11 9" fill="none">
                    <path
                        d="M10.199 2.714H3.59M10.199 6.926H1"
                        stroke="#4F2E90"
                        strokeWidth={0.653}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.88 2.713c0 .83-.645 1.502-1.44 1.502-.795 0-1.44-.672-1.44-1.502S1.645 1.21 2.44 1.21c.795 0 1.44.673 1.44 1.503z"
                        fill="#FEFEFE"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.88 2.713c0 .83-.645 1.502-1.44 1.502-.795 0-1.44-.672-1.44-1.502S1.645 1.21 2.44 1.21c.795 0 1.44.673 1.44 1.503z"
                        fill="#ECE9F3"
                        stroke="#4F2E90"
                        strokeWidth={0.599}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.039 6.925c0 .83-.645 1.503-1.44 1.503-.795 0-1.44-.673-1.44-1.503 0-.83.645-1.502 1.44-1.502.795 0 1.44.673 1.44 1.502z"
                        fill="#FEFEFE"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.039 6.925c0 .83-.645 1.503-1.44 1.503-.795 0-1.44-.673-1.44-1.503 0-.83.645-1.502 1.44-1.502.795 0 1.44.673 1.44 1.502z"
                        fill="#ECE9F3"
                        stroke="#4F2E90"
                        strokeWidth={0.599}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {title}
            </div>
        </div>
    );
};
export default Filters;
