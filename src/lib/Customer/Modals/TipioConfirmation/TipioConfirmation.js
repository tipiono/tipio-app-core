import React from "react";
import { Modal } from '../../../UI/Modal/Modal'
import TipioCountdown from "../../TipioCountdown/TipioCountdown";

function TipioConfirmation ({image, expiresIn}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="text-center">
                    <div className="position-relative">
                        <img className="img-fluid re" src={image} width="310px" alt="Tipio with offer"/>
                        <TipioCountdown className="timer" expires_in={expiresIn}/>
                    </div>

                    <h3>Dere er sterkere sammen!!</h3>
                    <p>For å øke sjansen til at Tipio skal gå igjennom kan du invitere venner som kan være  interessert i det samme. </p>
                </div>
            </Modal>
        </>
    )
}

export default TipioConfirmation;
