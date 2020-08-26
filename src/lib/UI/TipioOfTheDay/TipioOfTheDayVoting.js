import React from 'react';
import TipioOfTheDay from './TipioOfTheDay';
import SecondaryButton from '../Buttons/SecondaryButton';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const TipioOfTheDayVoting = ({ children, ...props }) => {
    return (
        <TipioOfTheDay {...props}>
            <div className="tipioOfTheDay__content--submit">{children}</div>
        </TipioOfTheDay>
    );
};

export default TipioOfTheDayVoting;
