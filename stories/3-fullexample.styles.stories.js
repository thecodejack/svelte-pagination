import { action } from "@storybook/addon-actions";

import PaginationView from "./views/FullPaginationExample.svelte";

import intro from "./../README.md";

export default {
  title: "Examples",
  parameters: {
    notes: { Introduction: intro },
  },
};

export const FullExamplePagination = () => ({
  Component: PaginationView,
  props: {},
});
