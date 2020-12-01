import React from 'react';
import cx from 'classnames';

function SalesProgressBarTooltip({ percentage, bindCount, totalCount }) {
    const inactiveWidth = 100 - percentage;
    return (
        <>
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
                    />
                    <span
                        style={{ width: `${inactiveWidth}%` }}
                        className="tooltip-progressbar d-flex justify-content-end"
                    ></span>
                </div>
                <span
                    style={{ marginTop: `-10px` }}
                    className={cx('tooltip-progressbar d-flex justify-content-end', {
                        'full-tooltip-progressbar': inactiveWidth === 0
                    })}
                >
                    {' '}
                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={7} cy={7} r={7} fill="#F5F5F5" />
                        <path
                            d="M9.787 3.696L6.075 8.393l-1.7-1.668a.515.515 0 10-.72.735l2.109 2.07a.515.515 0 00.764-.05l4.067-5.146a.515.515 0 10-.808-.638z"
                            fill="#fff"
                        />
                    </svg>
                </span>
            </>
            {bindCount > 0 && (
                <div className="sales__progress--tooltip middle">
                    <span>
                        {bindCount}/{totalCount} er med!
                    </span>
                </div>
            )}
            {/* </div> */}
        </>
    );
}

export default SalesProgressBarTooltip;
