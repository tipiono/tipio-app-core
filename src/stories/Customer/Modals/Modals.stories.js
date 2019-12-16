import React from 'react';
import {storiesOf} from '@storybook/react';
import {
    TipioWithOffer,
    TipioConfirmation,
    LoginOrRegister,
    SuccessModal,
    JoinTipioOnboarding,
    OnboardingMovie,
    ReadyToBid,
    Onboarding
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
                    animationURL="https://tipio.ams3.digitaloceanspaces.com/staging/public/020s0040_1280x1280_wAlpha.gif"
                    successTitle={"Du har nå opprettet en Tipio!"}
                />
            </div>
        </>
    )

    .add('Thank you for your order!', () =>
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    animationURL="https://ams3.digitaloceanspaces.com/tipio/staging/public/ezgif.com-optimize-background.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=N6JIDO3RJ64JLOKLVNAO%2F20191216%2Fams3%2Fs3%2Faws4_request&X-Amz-Date=20191216T113324Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ab7a9b645970ddd71478396eaed35b990eebd1a168e16b023c70efe9dc11ea6c"
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
    .add('Join Tipio Onboarding', () =>
        <>
            <div className="col-3 m-3">
                <JoinTipioOnboarding/>
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
    .add('Join Tipio Onboarding', () =>
    <>
        <div className="col-3 m-3">
            <Onboarding />
        </div>
    </>
    )
