import React from 'react';
import TipioOfTheDay from './TipioOfTheDay';

const TipioOfTheDayBidding = ({ children, ...props }) => {
    return (
        <TipioOfTheDay {...props}>
            <div className="tipioOfTheDay__content--submit">{children}</div>
        </TipioOfTheDay>
    );
};

export default TipioOfTheDayBidding;
