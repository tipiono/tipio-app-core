import React from 'react';
import TipioOfTheDay from './TipioOfTheDay';
import SecondaryButton from '../Buttons/SecondaryButton';
import SecondaryOutlineButton from '../Buttons/SecondaryOutlineButton';

const TipioOfTheDayVoting = (props) => {
    return (
        <TipioOfTheDay {...props}>
            <div className="tipioOfTheDay__content--submit">
                {props.joined ? (
                    <SecondaryButton text="Del nå" onClick={props.shareOnClick} />
                ) : (
                    <SecondaryOutlineButton
                        text="Delta i konkurransen"
                        textColor="text-white"
                        onClick={props.voteOnClick}
                    />
                )}
            </div>
        </TipioOfTheDay>
    );
};

export default TipioOfTheDayVoting;
