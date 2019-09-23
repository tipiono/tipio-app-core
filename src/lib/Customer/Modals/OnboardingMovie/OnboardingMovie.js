import React from "react";
import {Modal} from '../../../UI/Modal/Modal'

function OnboardingMovie({movieURL}) {
    return (
        <>
            <Modal showCloseButton>
                <div className="onboarding__movie">
                    <iframe className="onboarding__movie--iframe" src={movieURL} width="640" height="450" frameBorder="0"
                            allow="autoplay; fullscreen" allowFullScreen />
                </div>
            </Modal>
        </>
    )
}

export default OnboardingMovie;
