import React from "react";
import cx from 'classnames';

function HorizontalTimeline({
    verticalStatusOnClick,
    status
}) {
    if (!status) {
        return null;
    }
    return (
        <>
            <div className="horizontal-timeline">
                <ul className="horizontal-timeline-bar">
                    <li className={cx("horizontal-timeline-item step-1", {[status.step1]: true })}/>
                    <li className={cx("horizontal-timeline-item step-2", {[status.step2]: true })}/>
                    <li className={cx("horizontal-timeline-item step-3", {[status.step3]: true })}/>
                </ul>

                <div className="horizontal-timeline-content">
                    <h4 className="timeline-item-title">Påmelding pågår</h4>
                    <a href="#" onClick={verticalStatusOnClick}>Sjekk status</a>
                </div>

            </div>
        </>
    )
}

export default HorizontalTimeline;
