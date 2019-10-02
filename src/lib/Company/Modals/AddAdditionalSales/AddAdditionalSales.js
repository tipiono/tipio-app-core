import React from "react";
import {Modal} from '../../../UI/Modal/Modal'
import SecondaryButton from "../../../UI/Buttons/SecondaryButton";
import SecondaryOutlineButton from "../../../UI/Buttons/SecondaryOutlineButton";

function AddAdditionalSales({image, ...props}) {
    return (
        <>
            <Modal showCloseButton onCloseButtonClick={props.cancel}>
                <div className="addSales">
                    <a href="">
                        <img className="addSales--image" src={image} width="310px" alt="Tipio with offer" />
                    </a>

                    <h4 className="addSales--title">Vil du legge inn mersalg?</h4>
                    <p className="addSales--description">Du kan nå legge ut tre eksklusive mersalgs tilbud <br/> til dine kunder</p>

                    <div className="addSales--action mb-3">
                        <SecondaryButton text="Legg inn mersalg" onClick={props.postAdditionalSales} />
                    </div>
                    <div className="addSales--action">
                        <SecondaryOutlineButton text="Ikke denne gangen" onClick={props.cancel}/>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddAdditionalSales;
