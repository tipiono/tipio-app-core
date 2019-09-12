import React from "react";
import {Modal} from '../../../UI/Modal/Modal'
import SecondaryOutlineButton from "../../../UI/Buttons/SecondaryOutlineButton";
import SecondaryButton from "../../../UI/Buttons/SecondaryButton";


function LoginOrRegister({redirect}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="loginOrRegister">

                    <h2 className="loginOrRegister--title">Fint å se deg!</h2>

                    <p className="loginOrRegister--description">For å opprette en Tipio må du være innlogget. Logg
                        deg <br/> inn for å få en knall pris!</p>

                    <div className="loginOrRegister--action mb-4">
                        <a href={'/auth/login?redirect=' + redirect}>
                            <SecondaryOutlineButton text="Logg inn"/>
                        </a>
                    </div>

                    <div className="loginOrRegister--action">
                        <a href={'/user/create?redirect=' + redirect}>
                            <SecondaryButton text="Jeg er ny her, lag profil"/>
                        </a>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default LoginOrRegister;
