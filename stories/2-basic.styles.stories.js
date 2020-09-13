import { action } from "@storybook/addon-actions";

import BasicDefaultView from "./views/BasicDefaultStyledView.svelte";

import intro from "./../README.md";

export default {
  title: "Examples",
  parameters: {
    notes: { Introduction: intro },
  },
};

export const BasicDefaultStylesPagination = () => ({
  Component: BasicDefaultView,
  props: {},
});
