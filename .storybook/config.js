import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from "@storybook/addon-knobs";
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
function loadStories() {
    requireAll(require.context("../src/stories", true, /.stories\.js?$/));
}
configure(loadStories, module);
addDecorator(withInfo({}));
addDecorator(withKnobs);
