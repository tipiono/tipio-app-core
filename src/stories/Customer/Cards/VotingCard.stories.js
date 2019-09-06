import React from 'react';
import {storiesOf} from '@storybook/react';
import { VotingCard } from '../../../lib/index';

storiesOf('Customer/Components/Cards/VotingCard', module)
    .add('Enroll interest', () =>
        <>
            <div className="col-3 m-3">
                <VotingCard
                image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/133/1567587691480"}
                interestedCounter={"543"}
                />
            </div>
        </>
    )

    .add('Share now', () =>
        <>
            <div className="col-3 m-3">
                <VotingCard
                    image={"https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/133/1567587691480"}
                    interestedCounter={"543"}
                />
            </div>
        </>
    )

