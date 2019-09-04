import React from 'react';
import { storiesOf } from '@storybook/react';
import {TipioWithOffer, TipioConfirmation, LoginOrRegister, SuccessModal, ImageCropper} from '../../../lib/index';


storiesOf('Customer/Components/Modals', module)
    .add('TipioWithOffer', () =>
        <>
            <div className="col-3 m-3">
                <TipioWithOffer
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437"}
                    sale={"20%"}
                    joined={220}
                />
            </div>
        </>
    )

    .add('TipioConfirmation', () =>
        <>
            <div className="col-3 m-3">
                <TipioConfirmation
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437"}
                    expiresIn={new Date()}
                />
            </div>
        </>
    )

    .add('LoginOrRegister', () =>
        <>
            <div className="col-3 m-3">
                <LoginOrRegister />
            </div>
        </>
    )

    .add('Tipio successfully added', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Du har nå opprettet en Tipio!"}
                />
            </div>
        </>
    )

    .add('Thank you for your order!', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    successTitle={"Takk for din bestilling!"}
                    successDescription={"Du vil motta ordrebekreftelse på mail."}
                />
            </div>
        </>
    )

    .add('Crop image', () =>
        <>
            <div className="col-3 m-3">
                <ImageCropper />
            </div>
        </>
    )
