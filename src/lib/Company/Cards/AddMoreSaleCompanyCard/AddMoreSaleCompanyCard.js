import React from 'react';
import calculateDiscountPercentage from '../../../Util/calculateDiscountPercentage';

const AddMoreSaleCompanyCard = (props) => {
    let saleDiscount = 0;
    if (props.show_offer_as_percentage) {
        saleDiscount = `${calculateDiscountPercentage(
            props.first_price,
            props.company_price
        )}%`
    } else {
        saleDiscount = `${props.company_price - props.first_price} kr`;
    }
    return (
        <div className="addMoreSaleCard">
            <div className="d-flex flex-row align-items-center">
                <div className="addMoreSaleCard__preview">
                    <a className="addMoreSaleCard__preview--image lazy-image" href="" onClick={(e)=>{e.preventDefault(); props.titleOnClick(props);}}>
                        {props.tipio.images
                            && props.tipio.images.length
                            && <img className="lazyload img-fluid" src={props.tipio.images[0].blob_url} alt=""/>
                        }
                        <span className="addMoreSaleCard__preview--discount">{saleDiscount}</span>
                    </a>
                </div>
                <div className="addMoreSaleCard__content">
                    <h5><a href="" className="addMoreSaleCard__content--title" onClick={(e)=>{e.preventDefault(); props.titleOnClick(props);}}>{props.tipio.title}</a></h5>
                    <div className="addMoreSaleCard__content__price">
                        <h6 className="addMoreSaleCard__content__price--sale">{props.first_price} Kr</h6>
                        <h6 className="addMoreSaleCard__content__price--cost">{props.company_price} Kr</h6>
                    </div>
                </div>

                <a href="" className="addMoreSaleCard__remove" />
            </div>
        </div>
    );
};

export default AddMoreSaleCompanyCard;
