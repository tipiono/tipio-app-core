import React from 'react';
import Countdown, {calcTimeDelta, formatTimeDelta} from "react-countdown-now/dist/index";

const Completionist = () => <span className="inactive timer">Ikke aktiv</span>;
const renderer = ({hours, minutes, seconds, completed}) => {
    let cn = hours < 24 ? 'purple' : 'turquoise';
    if (completed) {
        return <Completionist/>;
    } else {
        return (<span className={cn + ' timer'}>{hours}:{minutes}:{seconds}</span>);
    }
};

class TipioCountdown extends React.Component {
    render() {
        return <Countdown
            date={this.props.expires_in}
            renderer={({completed}) => {
                const result = formatTimeDelta(calcTimeDelta(this.props.expires_in), {
                    daysInHours: true
                });
                return renderer({...result, completed});
            }}
        />;
    }
}

export default TipioCountdown;