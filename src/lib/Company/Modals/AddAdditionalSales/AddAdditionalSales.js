import React from "react";
import {Modal} from '../../../UI/Modal/Modal'

function AddAdditionalSales({image}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="addSales">
                    <a href="">
                        <img className="tipio__withOffer--image" src={image} width="310px" alt="Tipio with offer" />
                    </a>

                    <h4 className="addSales--title">Vil du legge inn mersalg?</h4>
                    <p className="addSales--description">Du kan nå legge ut tre eksklusive mersalgs tilbud <br/> til dine kunder</p>

                    <div className="addSales--action">
                        <button type="button" className="btn btn-secondary btn-lg mb-4">Legg inn mersalg</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg">Ikke denne gangen</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddAdditionalSales;
