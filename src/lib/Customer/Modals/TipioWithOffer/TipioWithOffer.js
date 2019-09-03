import React from "react";
import { Modal } from '../../../UI/Modal/Modal'

function TipioWithOffer ({ image, sale, joined }) {
    return (
        <>
            <Modal showCloseButton>
                <div className="text-center">
                    <img className="img-fluid" src={image} width="310px" alt="Tipio with offer"/>

                    <h3>Gratulerer!</h3>
                    <p>{joined} andre kjøpte med deg! Prisen gikk ytterligere ned til</p>

                    <h4 className="text-secondary">{sale}</h4>

                    <button type="button" className="btn btn-secondary px-5">Neste</button>
                </div>
            </Modal>
        </>
    )
}

export default TipioWithOffer;
