import React from 'react';
import TipioOfTheDay from "./TipioOfTheDay";
import SecondaryButton from "../Buttons/SecondaryButton";
import {useTranslation} from 'react-i18next';

const TipioOfTheDayBidding = (props) => {
    const { t } = useTranslation();

    return (
        <TipioOfTheDay {...props}>
            <div className="tipioOfTheDay__content--submit">
                <SecondaryButton text="Legg i handlekurv" />
            </div>
        </TipioOfTheDay>
    );
};

export default TipioOfTheDayBidding;