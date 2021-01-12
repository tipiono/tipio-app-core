import React from 'react';

function SalesProgressBar({ percentage, bindingCount, totalCount }) {
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
                    {bindingCount} av {totalCount} er interesserte!
                </span>
            </div>
        </>
    );
}

export default SalesProgressBar;
