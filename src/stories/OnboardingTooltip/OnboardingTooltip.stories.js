import React from 'react';
import { storiesOf } from '@storybook/react';
import OnboardingTooltip from '../../lib/OnboardingTooltip/OnboardingTooltip'


storiesOf('Components/OnboardingTooltip', module)
    .add('Tooltip on top', () =>
        <>
            <div className="col-3 m-3">
                <OnboardingTooltip step={{
                title: 'Meld interesse',
                content: 'Trykk her hvis du virkelig vil ha produktet! Det gjør det enklere for leverandøren å sette best mulig rabatt!',
                placement: 'top',
            }} />
            </div>
        </>
    )
    .add('Tooltip on right', () =>
        <>
            <div className="col-3 m-3">
                <OnboardingTooltip step={{
                    title: 'Meld interesse',
                    content: 'Trykk her hvis du virkelig vil ha produktet! Det gjør det enklere for leverandøren å sette best mulig rabatt!',
                    placement: 'right',
                }} />
            </div>
        </>
    )
    .add('Tooltip on bottom', () =>
        <>
            <div className="col-3 m-3">
                <OnboardingTooltip step={{
                    title: 'Meld interesse',
                    content: 'Trykk her hvis du virkelig vil ha produktet! Det gjør det enklere for leverandøren å sette best mulig rabatt!',
                    placement: 'bottom',
                }} />
            </div>
        </>
    )
    .add('Tooltip on left', () =>
        <>
            <div className="col-3 m-3">
                <OnboardingTooltip step={{
                    title: 'Meld interesse',
                    content: 'Trykk her hvis du virkelig vil ha produktet! Det gjør det enklere for leverandøren å sette best mulig rabatt!',
                    placement: 'left',
                }} />
            </div>
        </>
    )

