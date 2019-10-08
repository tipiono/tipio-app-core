import React from 'react';

const AddMoreSaleCompanyCard = () => {
    return (
        <div className="addMoreSaleCard">
            <div className="d-flex flex-row">
                <div className="addMoreSaleCard__preview">
                    <a className="addMoreSaleCard__preview--image" href="">
                        <img className="img-fluid" src="https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/93/1560161148875" alt=""/>
                        <span className="addMoreSaleCard__preview--discount">-30%</span>
                    </a>

                </div>

                <div className="addMoreSaleCard__content">
                    <h5 className="addMoreSaleCard__content--title">Samsung 65" UHD høytaler UE65NU7105</h5>

                    <div className="addMoreSaleCard__content__price">
                        <h6 className="addMoreSaleCard__content__price--sale">8 499 Kr</h6>
                        <h6 className="addMoreSaleCard__content__price--cost">7 499 Kr</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMoreSaleCompanyCard;
