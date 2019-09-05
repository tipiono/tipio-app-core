import React from "react";
import {Modal} from '../../../UI/Modal/Modal'

function TipioWithOffer({image, sale, joined}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="tipio__withOffer">

                    <a href="">
                        <img className="tipio__withOffer--image" src={image} width="310px" alt="Tipio with offer" />
                    </a>

                    <h3 className="tipio__withOffer--title">Gratulerer!</h3>
                    <p className="tipio__withOffer--description">{joined} andre kjøpte med deg! Prisen gikk ytterligere ned til</p>

                    <h4 className="tipio__withOffer--salePrice">{sale}</h4>

                    <button type="button" className="btn btn-lg btn-secondary w-50">Neste</button>
                </div>
            </Modal>
        </>
    )
}

export default TipioWithOffer;
