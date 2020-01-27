import React from 'react';
import PropTypes from 'prop-types';
import SecondaryButton from "../../../UI/Buttons/SecondaryButton";

const FooterMainCard = ({ title, marketPrice, firstRange, secondRange, bindCount, onBindClick }) => {

    const generateNewPrice = () => {
        return bindCount >= 0 && bindCount >= firstRange.from && bindCount <= firstRange.to ? firstRange.price : secondRange.price;
    }

    return (
        <div className="footerMainCard">
            <div className="row align-items-center">
                <div className="col-6 col-lg-5">
                    <h3 className="footerMainCard__title">{title}</h3>
                </div>
                <div className="col-8 col-md-4 d-none d-lg-block">
                    <div className="footerMainCard__content">
                        <div className="footerMainCard__content__priceLabel">
                            <h6 className="footerMainCard__content__priceLabel__new">Pris nå</h6>
                            <h6 className="footerMainCard__content__priceLabel__first">Markedspris</h6>

                        </div>
                        <div className="footerMainCard__content__priceValue">
                            <h6 className="footerMainCard__content__priceValue__new">{generateNewPrice()} Kr</h6>
                            <h6 className="footerMainCard__content__priceValue__first">{marketPrice} Kr</h6>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-3">
                    <SecondaryButton onClick={onBindClick} text={'Legg i handlekurv'} loading={false} />
                </div>
            </div>
        </div>
    );
};

FooterMainCard.propTypes = {
    title: PropTypes.string.isRequired,
    marketPrice: PropTypes.string.isRequired,
    firstRange: PropTypes.object.isRequired,
    secondRange: PropTypes.object.isRequired,
    bindCount: PropTypes.number.isRequired,
    onBindClick: PropTypes.func.isRequired
}

export default FooterMainCard;