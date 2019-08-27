import {configure, storiesOf} from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs} from "@storybook/addon-knobs";

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
addDecorator(
    withInfo({
      inline: true, // Global configuration for the info addon across all of your stories.
    })
);

addDecorator(withKnobs);
