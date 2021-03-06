import React from 'react';
import Countdown, { calcTimeDelta, formatTimeDelta } from 'react-countdown-now/dist/index';

const Completionist = () => <span className="inactive timer">Ikke aktiv</span>;

const renderer = ({ hours, minutes, seconds, completed, soldOut }) => {
    let cn = 'purple';
    if (completed) {
        return <Completionist />;
    } else {
        if (soldOut) {
            return <span className="inactive timer">Utsolgt</span>;
        } else if (hours > 48) {
            return <span className={cn + ' timer'}>{Math.floor(hours / 24)} dager igjen</span>;
        } else if (hours > 24 && hours <= 48) {
            return <span className={cn + ' timer'}>{hours} timer</span>;
        } else
            return (
                <span className={cn + ' timer'}>
                    {hours}:{minutes}:{seconds}
                </span>
            );
    }
};

class TipioCountdown extends React.Component {
    render() {
        const substractN = new Date(this.props.expires_in);
        substractN.setHours(substractN.getHours() - 120);
        const soldOut = this.props.soldOut;
        if (substractN > new Date()) {
            return null;
        }

        return (
            <Countdown
                date={this.props.expires_in}
                renderer={({ completed }) => {
                    const result = formatTimeDelta(calcTimeDelta(this.props.expires_in), {
                        daysInHours: true
                    });
                    return renderer({ ...result, completed, soldOut });
                }}
            />
        );
    }
}

export default TipioCountdown;
