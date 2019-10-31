import React from 'react';

const MaterialSearch = ({ defaultValue, onSubmit }) => {
    return (
        <div className="materialSearch">
            <svg className="materialSearch--icon" width={21} height={21}>
                <path
                    d="M8.273 14.81a6.223 6.223 0 004.435-1.838 6.21 6.21 0 001.825-4.422 6.262 6.262 0 00-1.825-4.434 6.265 6.265 0 00-4.435-1.824 6.208 6.208 0 00-4.421 1.824A6.219 6.219 0 002.015 8.55c0 1.673.646 3.244 1.824 4.422a6.219 6.219 0 004.434 1.837zm10.427 5.6l-5.333-5.335a8.24 8.24 0 01-5.094 1.748 8.267 8.267 0 01-5.853-2.419A8.226 8.226 0 010 8.55c0-2.217.862-4.295 2.42-5.853A8.268 8.268 0 018.273.277c2.218 0 4.295.862 5.854 2.42A8.18 8.18 0 0116.56 8.55a8.253 8.253 0 01-1.762 5.093l5.334 5.334L18.7 20.41z"
                    fill="#3E2187"
                    fillRule="evenodd"
                />
            </svg>
            <input
                id="material-search"
                className="materialSearch--input"
                type="text"
                placeholder="Søk navn, poststed"
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        // alert("enter")
                        e.preventDefault();
                        e.stopPropagation();
                        onSubmit(e.target.value);
                    }
                }}
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default MaterialSearch;
