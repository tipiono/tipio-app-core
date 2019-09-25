import React from 'react';
import Checkbox from "../../../UI/Forms/Checkbox";

const AdditionalSaleCompanyCard = ({image, title, salePrice, costPrice, saleDiscount, children, defaultValue}) => {
    return (
        <div>
            <div className="additionalSaleCard">
                <div className="d-flex flex-row mb-5">
                    <div className="additionalSaleCard__preview">
                        <a className="additionalSaleCard__preview--image" href="">
                            <img className="img-fluid" src={image} alt=""/>
                            <span className="additionalSaleCard__preview--discount">{saleDiscount}</span>
                        </a>
                    </div>
                    <div className="additionalSaleCard__content">
                        <div className="additionalSaleCard__content--price">
                            <h6 className="additionalSaleCard__content--price--sale">{salePrice}</h6>
                            <h6 className="additionalSaleCard__content--price--cost">{costPrice}</h6>
                        </div>

                        <h6 className="additionalSaleCard__content--title">{title}</h6>
                    </div>
                </div>

                <Checkbox label={"Legg til mersalg"} />

            </div>
        </div>
    );
};

export default AdditionalSaleCompanyCard;
