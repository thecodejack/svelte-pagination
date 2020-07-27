import { action } from "@storybook/addon-actions";

import BasicDefaultView from "./views/BasicDefaultView.svelte";

import intro from "./../README.md";

export default {
  title: "Examples",
  parameters: {
    notes: { Introduction: intro },
  },
};

export const BasicDefaultPagination = () => ({
  Component: BasicDefaultView,
  props: {},
});
