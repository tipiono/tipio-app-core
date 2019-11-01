import React from 'react';
import calculateDiscountPercentage from '../../../Util/calculateDiscountPercentage';

const AddMoreSaleCompanyCard = (props) => {
    return (
        <div className="addMoreSaleCard">
            <div className="d-flex flex-row">
                <div className="addMoreSaleCard__preview">
                    <a className="addMoreSaleCard__preview--image" href="">
                        {props.tipio.images
                            && props.tipio.images.length 
                            && <img className="img-fluid" src={props.tipio.images[0].blob_url} alt=""/>
                        }
                        <span className="addMoreSaleCard__preview--discount">{calculateDiscountPercentage(props.first_price, props.company_price)}%</span>
                    </a>
                </div>
                <div className="addMoreSaleCard__content">
                    <h5 className="addMoreSaleCard__content--title"><a href="" onClick={(e)=>{e.preventDefault(); props.titleOnClick(props);}}>{props.tipio.title}</a></h5>
                    <div className="addMoreSaleCard__content__price">
                        <h6 className="addMoreSaleCard__content__price--sale">{props.first_price} Kr</h6>
                        <h6 className="addMoreSaleCard__content__price--cost">{props.company_price} Kr</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMoreSaleCompanyCard;
