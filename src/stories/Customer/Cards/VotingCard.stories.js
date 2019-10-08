import React from 'react';
import {storiesOf} from '@storybook/react';
import { VotingCard, VotingCardShowInterestButton, VotingCardShareButton } from '../../../lib/index';

storiesOf('Customer/Components/Cards/VotingCard', module)
    .add('Enroll interest', () =>
        <>
            <div className="col-3 m-3">
                <VotingCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973"}
                    interestedCounter={"543"}
                    title={"Caad12 Ultegra 2019"}
                    description={"Cannondale"}
                    expiresIn={new Date()}
                >
                    <VotingCardShowInterestButton />
                </VotingCard>
            </div>
        </>
    )
    .add('Share now', () =>
        <>
            <div className="col-3 m-3">
                <VotingCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/133/1567587691480"}
                    interestedCounter={"543"}
                    title={"Caad12 Ultegra 2019"}
                    description={"Cannondale"}
                    expiresIn={new Date()}
                >
                    <VotingCardShareButton />
                </VotingCard>
            </div>
        </>
    )

