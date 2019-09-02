import React from 'react';
import { storiesOf } from '@storybook/react';
import OnboardingTooltip from '../../lib/OnboardingTooltip/OnboardingTooltip'


storiesOf('Components/OnboardingTooltip', module)
    .add('default', () =>  <OnboardingTooltip step={{
        title: 'Markedspris',
        content: 'Er prisen for produktet i dag.',
        placement: 'top',
    }} />)
    .add('withLongerText', () =>  <OnboardingTooltip step={{
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam fermentum massa, in euismod massa finibus a. Pellentesque sit amet erat leo. Aenean sagittis tortor posuere, pretium felis ut, porta sapien. Cras id lectus efficitur, cursus odio eu, aliquam arcu. Cras efficitur vehicula elit nec porta.',
        placement: 'top',
    }} />)
    .add('withContinuousTrue', () =>  <OnboardingTooltip step={{
        title: 'Lorem ipsum',
        content: 'Er prisen for produktet i dag.',
        placement: 'top',
    }} continuous={true}/>)
