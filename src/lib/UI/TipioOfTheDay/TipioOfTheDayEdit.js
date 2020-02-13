import React from 'react';
import TipioOfTheDay from "./TipioOfTheDay";
import SecondaryOutlineButton from "../Buttons/SecondaryOutlineButton";


const TipioOfTheDayEdit = (props) => {
    return (
        <TipioOfTheDay {...props}>
            <div className="tipioOfTheDay__content--submit">
                <SecondaryOutlineButton
                    text="Rediger"
                    textColor="text-white"
                    onClick={props.onClickEdit}
                />
            </div>
        </TipioOfTheDay>
    );
};

export default TipioOfTheDayEdit;