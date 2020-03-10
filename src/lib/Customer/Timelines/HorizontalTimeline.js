import React from "react";
import cx from 'classnames';

function HorizontalTimeline({
    verticalStatusOnClick,
    status
}) {
    if (!status) {
        return null;
    }

    const titles = {
        step1: 'Påmelding pågår',
        step2: 'Levering pågår',
        step3: 'Levert',
    }

    const _renderTitle = () => {
        if (status.step3 === 'completed') {
            return titles.step3;
        } else if (status.step2 === 'completed') {
            return titles.step2;
        }
        return titles.step1;
    }

    return (
        <>
            <div className="horizontal-timeline">
                <ul className="horizontal-timeline-bar">
                    <li className={cx("horizontal-timeline-item step-1", { [status.step1]: true })} />
                    <li className={cx("horizontal-timeline-item step-2", { [status.step2]: true })} />
                    <li className={cx("horizontal-timeline-item step-3", { [status.step3]: true })} />
                </ul>

                <div className="horizontal-timeline-content">
                    <h4 className="timeline-item-title">{_renderTitle()}</h4>
                    <a href="#" onClick={verticalStatusOnClick}>Sjekk status</a>
                </div>

            </div>
        </>
    )
}

export default HorizontalTimeline;
