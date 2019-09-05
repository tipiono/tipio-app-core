import React from 'react';
import {storiesOf} from '@storybook/react';
import {
    TipioWithOffer,
    TipioConfirmation,
    LoginOrRegister,
    SuccessModal,
    ImageCropper,
    JoinTipioOnboarding,
    VerticalTimeline,
    OnboardingMovie,
    ReadyToBid,
    ChooseCategory
} from '../../../lib/index';


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
                <LoginOrRegister/>
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

    .add('Suppliers ready to bid', () =>
        <>
            <div className="col-3 m-3">
                <ReadyToBid
                    joined={"220"}
                />
            </div>
        </>
    )

    .add('Crop image', () =>
        <>
            <div className="col-3 m-3">
                <ImageCropper/>
            </div>
        </>
    )

    .add('Join Tipio Onboarding', () =>
        <>
            <div className="col-3 m-3">
                <JoinTipioOnboarding/>
            </div>
        </>
    )

    .add('Vertical Timeline', () =>
        <>
            <div className="col-3 m-3">
                <VerticalTimeline/>
            </div>
        </>
    )

    .add('Choose Category', () =>
        <>
            <div className="col-3 m-3">
                <ChooseCategory/>
            </div>
        </>
    )

    .add('Binding Onboarding Movie', () =>
        <>
            <div className="col-3 m-3">
                <OnboardingMovie
                    movieURL={"https://player.vimeo.com/video/354894903?title=0&byline=0"}
                />
            </div>
        </>
    )
    .add('Voting Onboarding Movie', () =>
        <>
            <div className="col-3 m-3">
                <OnboardingMovie
                    movieURL={"https://player.vimeo.com/video/288533165?title=0&byline=0&portrait=0"}
                />
            </div>
        </>
    )
