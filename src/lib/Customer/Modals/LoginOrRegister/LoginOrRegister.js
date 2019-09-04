import React from "react";
import {Modal} from '../../../UI/Modal/Modal'

function LoginOrRegister({redirect}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="loginOrRegister">

                    <h2 className="loginOrRegister--title">Fint å se deg!</h2>

                    <p className="loginOrRegister--description">For å opprette en Tipio må du være innlogget. Logg
                        deg <br/> inn for å få en knall pris!</p>

                    <div className="loginOrRegister--buttons">
                        <a href={'/auth/login?redirect=' + redirect}>
                            <button type="button" className="btn btn-outline-secondary btn-lg w-50 mb-4">Logg inn</button>
                        </a>
                        <a href={'/user/create?redirect=' + redirect}>
                            <button type="button" className="btn btn-secondary btn-lg w-50">Jeg er ny her, lag profil</button>
                        </a>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default LoginOrRegister;
