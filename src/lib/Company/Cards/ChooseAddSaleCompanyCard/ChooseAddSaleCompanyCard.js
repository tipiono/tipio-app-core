import React from 'react';
import Checkbox from "../../../UI/Forms/Checkbox";

export default React.forwardRef(({
    image,
    title,
    salePrice,
    costPrice,
    saleDiscount,
    children,
    defaultValue,
    id,
    label,
    name,
    errors,
    ...props
}, ref) => (
    <>
        <div>
            <div className="chooseAddSaleCard">
                <div className="d-flex flex-row mb-4 mb-md-5">
                    <div className="chooseAddSaleCard__preview">
                        <a className="chooseAddSaleCard__preview--image lazy-image" href="">
                            <img className="lazyload img-fluid" src={image} alt=""/>
                            <span className="chooseAddSaleCard__preview--discount">{saleDiscount}%</span>
                        </a>
                    </div>
                    <div className="chooseAddSaleCard__content">
                        <div className="chooseAddSaleCard__content--price">
                            <h6 className="chooseAddSaleCard__content--price--sale">{salePrice} Kr</h6>
                            <h6 className="chooseAddSaleCard__content--price--cost">{costPrice} Kr</h6>
                        </div>
                        <h6 className="chooseAddSaleCard__content--title">{title}</h6>
                    </div>
                </div>
                <Checkbox label={"Legg til mersalg"} id={id} name={name} {...props} ref={ref} />
            </div>
        </div>
    </>
));
