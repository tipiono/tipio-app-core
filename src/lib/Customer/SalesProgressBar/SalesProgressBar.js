import React from 'react';

function SalesProgressBar({ percentage, bindingCount, totalCount }) {
    const inactiveWidth = 100 - percentage;
    return (
        <>
            <div className="sales__progress">
                <>
                    {' '}
                    <div className="sales__progress--bar progress">
                        <div
                            className={`progress-bar bg-secondary`}
                            style={{ width: `${percentage}%` }}
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </>
                <span className="sales__progress--label">
                    {bindingCount} av {totalCount} er med
                </span>
            </div>
        </>
    );
}

export default SalesProgressBar;
