import React from "react";

function HorizontalTimeline({}) {
    return (
        <>
            <div className="horizontal-timeline">
                <ul className="horizontal-timeline-bar">
                    <li className="horizontal-timeline-item completed step-1"/>
                    <li className="horizontal-timeline-item ongoing step-2"/>
                    <li className="horizontal-timeline-item coming step-3"/>
                </ul>

                <div className="horizontal-timeline-content">
                    <h4 className="timeline-item-title">Påmelding pågår</h4>
                    <a href="#">Sjekk status</a>
                </div>

            </div>
        </>
    )
}

export default HorizontalTimeline;
