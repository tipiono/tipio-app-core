import React from "react";
import {Modal} from '../../../UI/Modal/Modal'
import SecondaryButton from "../../../UI/Buttons/SecondaryButton";
import SecondaryOutlineButton from "../../../UI/Buttons/SecondaryOutlineButton";

function AddAdditionalSales({image}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="addSales">
                    <a href="">
                        <img className="addSales--image" src={image} width="310px" alt="Tipio with offer" />
                    </a>

                    <h4 className="addSales--title">Vil du legge inn mersalg?</h4>
                    <p className="addSales--description">Du kan nå legge ut tre eksklusive mersalgs tilbud <br/> til dine kunder</p>

                    <div className="addSales--action mb-3">
                        <SecondaryButton text="Legg inn mersalg" />
                    </div>
                    <div className="addSales--action">
                        <SecondaryOutlineButton text="Ikke denne gangen" />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddAdditionalSales;
