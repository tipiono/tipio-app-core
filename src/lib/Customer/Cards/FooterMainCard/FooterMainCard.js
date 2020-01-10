import React from 'react';
import {action} from "@storybook/addon-actions";
import {boolean, text} from "@storybook/addon-knobs";
import SecondaryButton from "../../../UI/Buttons/SecondaryButton";

const FooterMainCard = () => {
    return (
        <div className="footerMainCard">
            <div className="row align-items-center">
                <div className="col-6 d-none d-md-block">
                    <h3 className="footerMainCard__title">Productname</h3>
                </div>
                <div className="col-8 col-md-4">
                    <div className="footerMainCard__content">
                        <div className="footerMainCard__content__priceLabel">
                            <h6 className="footerMainCard__content__priceLabel__new">Pris nå</h6>
                            <h6 className="footerMainCard__content__priceLabel__first">Markedspris</h6>

                        </div>
                        <div className="footerMainCard__content__priceValue">
                            <h6 className="footerMainCard__content__priceValue__new">7 990 Kr</h6>
                            <h6 className="footerMainCard__content__priceValue__first">11 070 Kr</h6>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-2">
                    <SecondaryButton onClick={action('clicked')} text={text('Label', 'Kjøp nå')}
                                     loading={boolean('Loading ', false)}/>
                </div>
            </div>
        </div>
    );
};

export default FooterMainCard;