import React from "react";

function SalesProgressBar ({
    percentage,
    bindingCount
}) {
    return (
        <>
            <div className="sales__progress my-3">
                <div className="sales__progress--bar progress">
                    <div className={`progress-bar w-${percentage} bg-secondary`} role="progressbar" aria-valuenow="25"
                         aria-valuemin="0"
                         aria-valuemax="100"/>
                </div>
                <span className="sales__progress--label">Allerede {bindingCount} har kjøpt</span>
            </div>

        </>
    )
}

export default SalesProgressBar;
