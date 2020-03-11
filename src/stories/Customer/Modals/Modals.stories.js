import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
    TipioWithOffer,
    TipioConfirmation,
    LoginOrRegister,
    SuccessModal,
    JoinTipioOnboarding,
    OnboardingMovie,
    ReadyToBid,
    Onboarding,
    SecondaryButton
} from '../../../lib/index';

storiesOf('Customer/Components/Modals', module)
    .add('TipioWithOffer', () => (
        <>
            <div className="col-3 m-3">
                <TipioWithOffer
                    image={'https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437'}
                    sale={'20%'}
                    joined={220}
                />
            </div>
        </>
    ))

    .add('TipioConfirmation', () => {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return (
            <>
                <div className="col-3 m-3">
                    {isOpen && (
                        <TipioConfirmation
                            image={'https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/131/1563957777437'}
                            expiresIn={new Date()}
                            onCloseButtonClick={toggle}
                            share={{
                                link: `tipio/vote/`,
                                title: `TItle ...`
                            }}
                            title={'title'}
                            description={'description ...'}
                        />
                    )}
                </div>
                <div className="w-25 d-flex justify-content-center">
                    <SecondaryButton text={'Show / Hide modal'} onClick={toggle} />
                </div>
            </>
        );
    })

    .add('LoginOrRegister', () => (
        <>
            <div className="col-3 m-3">
                <LoginOrRegister />
            </div>
        </>
    ))

    .add('Tipio successfully added', () => (
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    animationURL="/assets/images/animations/Awsome_LillaAlpha_442x441.gif"
                    successTitle={'Du har nå opprettet en Tipio!'}
                />
            </div>
        </>
    ))

    .add('Thank you for your order!', () => (
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    animationURL="/assets/images/animations/Awsome_Alpha_300x300.png"
                    successTitle={'Takk for din bestilling!'}
                    successDescription={'Du vil motta ordrebekreftelse på mail.'}
                />
            </div>
        </>
    ))

    .add('Thank you for your order with video!', () => (
        <>
            <div className="col-3 m-3">
                <SuccessModal
                    videoURL={'/assets/images/animations/Awsome_lillaBG_441x441.mp4'}
                    animationURL="/assets/images/animations/Awsome_Alpha_300x300.png"
                    successTitle={'Takk for din bestilling!'}
                    successDescription={'Du vil motta ordrebekreftelse på mail.'}
                />
            </div>
        </>
    ))

    .add('Suppliers ready to bid', () => (
        <>
            <div className="col-3 m-3">
                <ReadyToBid joined={'220'} />
            </div>
        </>
    ))
    .add('Join Tipio Onboarding', () => (
        <>
            <div className="col-3 m-3">
                <JoinTipioOnboarding />
            </div>
        </>
    ))
    .add('Binding Onboarding Movie', () => (
        <>
            <div className="col-3 m-3">
                <OnboardingMovie movieURL={'https://player.vimeo.com/video/354894903?title=0&byline=0'} />
            </div>
        </>
    ))
    .add('Voting Onboarding Movie', () => (
        <>
            <div className="col-3 m-3">
                <OnboardingMovie movieURL={'https://player.vimeo.com/video/288533165?title=0&byline=0&portrait=0'} />
            </div>
        </>
    ))
    .add('Join Tipio Onboarding', () => (
        <>
            <div className="col-3 m-3">
                <Onboarding />
            </div>
        </>
    ));
