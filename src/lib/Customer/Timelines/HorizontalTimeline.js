import React from "react";
import LinkButton from "../../UI/Buttons/LinkButton";
import { Link } from 'react-router-dom';

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
                    <LinkButton text="Sjekk status" to="/" />
                </div>

            </div>
        </>
    )
}

export default HorizontalTimeline;
