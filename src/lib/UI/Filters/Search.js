import React, { useEffect, useState } from 'react';

const FilterSearch = ({ defaultValue, onSubmit }) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    useEffect(() => {
        if (inputValue !== defaultValue) {
            setInputValue(defaultValue);
        }
    }, [defaultValue]);

    const _onKeyUp = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            onSubmit(e.target.value);
        }
    };
    const _onChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="filterSearch">
            <svg className="filterSearch--icon" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.46 13.06l5.07 5.08a1 1 0 01-.02 1.37 1 1 0 01-1.43 0L13 14.44a8 8 0 01-4.93 1.7 8.07 8.07 0 118.07-8 8 8 0 01-1.68 4.92zM2.07 8.14a6 6 0 1012 0 6 6 0 00-12 0z"
                    fill="#fff"
                />
                <mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.46 13.06l5.07 5.08a1 1 0 01-.02 1.37 1 1 0 01-1.43 0L13 14.44a8 8 0 01-4.93 1.7 8.07 8.07 0 118.07-8 8 8 0 01-1.68 4.92zM2.07 8.14a6 6 0 1012 0 6 6 0 00-12 0z"
                        fill="#fff"
                    />
                </mask>
                <g mask="url(#prefix__a)">
                    <path fill="#8C8F91" d="M-27-25h50v50h-50z" />
                </g>
            </svg>
            <input
                id="material-search"
                className="filterSearch--input"
                type="text"
                placeholder="Søk på kategori, navn, merke.."
                value={inputValue || ''}
                onChange={_onChange}
                onKeyUp={_onKeyUp}
                autoComplete="off"
            />
        </div>
    );
};

export default FilterSearch;
