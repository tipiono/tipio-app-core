import React from 'react';
import TimeLeft from "../../static/assets/images/clock.svg";
import Countdown, { calcTimeDelta, formatTimeDelta } from "react-countdown-now";
import { PINK, GREEN } from "./CountdownType";
const cx = require('classnames');

const renderer = ({hours, minutes, seconds, completed, type}) => {
    return  <span className={cx(
        {
            'pinky-countdown-sm-time': PINK === type,
            'green-countdown-sm-time': GREEN === type
        }
    )}>{hours}:{minutes}:{seconds}</span>
};



function PinkyCountdownSM ({
                               expires_in,
                               type = 0
}) {
    return (
        //<div className="pinky-countdown-sm">
        <div className={cx(
            {
                'pinky-countdown-sm': PINK === type,
                'green-countdown-sm': GREEN === type
            }
        )}>
            <svg className={cx({
                'pinky-countdown-sm-icon': PINK === type,
                'green-countdown-sm-icon': GREEN === type,

            })} width={11} height={12}>
                <path
                    fill="#E74298"
                    d="M2.389 10.076C.15 8.459-.535 5.386.799 2.945a.155.155 0 01-.04-.046L.443 2.5A1.458 1.458 0 01.69.44a1.487 1.487 0 012.077.265l.107.138a5.29 5.29 0 015.25 0l.107-.138A1.487 1.487 0 0110.31.439a1.459 1.459 0 01.255 2.062l-.318.398a.155.155 0 01-.04.046c1.333 2.443.646 5.516-1.595 7.13l1.064 1.083c.11.112.11.292 0 .404a.276.276 0 01-.396 0L8.148 10.41a5.302 5.302 0 01-5.216 0L1.8 11.562a.276.276 0 01-.396 0 .289.289 0 010-.404l.985-1.082zm7.495-7.644l.232-.294a.887.887 0 00-.153-1.25.933.933 0 00-1.29.156l-.062.092c.494.355.925.793 1.273 1.296zm-8.768 0a5.327 5.327 0 011.273-1.296l-.063-.086a.933.933 0 00-1.29-.156.887.887 0 00-.153 1.25l.233.288zM5.5 10.496c2.656 0 4.809-2.192 4.809-4.896C10.309 2.896 8.156.704 5.5.704S.691 2.896.691 5.6c.004 2.703 2.155 4.893 4.809 4.896zM4.007 4.16l1.516 1.601L8.13 3.094a.276.276 0 01.396 0 .29.29 0 010 .404l-2.829 2.88a.28.28 0 01-.407 0L3.594 4.54a.29.29 0 010-.409.274.274 0 01.413.029z"
                />
            </svg>

            <Countdown
                date={expires_in}
                renderer={({completed}) => {
                    const result = formatTimeDelta(calcTimeDelta(expires_in), {
                        daysInHours: true
                    });
                    return renderer({...result, completed, type});
                }}
            />
        </div>
    );
}

export default PinkyCountdownSM;
