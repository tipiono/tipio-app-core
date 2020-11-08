import React from 'react';

function SalesProgressBarTooltip({ percentage, bindCount }) {
    return (
        <>
            <div className="sales__progress--bar progress">
                <div
                    className={`progress-bar bg-secondary`}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
                <span style={{ marginLeft: `${percentage}%` }} className="tooltip-progressbar"></span>
            </div>
        </>
    );
}

export default SalesProgressBarTooltip;
