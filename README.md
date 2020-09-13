# svelte-pagination

[![NPM](https://img.shields.io/npm/v/svelte-pagination.svg)](https://www.npmjs.com/package/svelte-pagination)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/svelte-pagination.svg)](https://www.npmjs.com/package/svelte-pagination)

Raw SvelteJS component for dynamic pagination. By applying styles, developer can acheive component in multiple forms.

## Demo

[Click here for Storybook link](https://svelte-pagination.netlify.app/)

[REPL Link](https://svelte.dev/repl/72a37aee9ae24705b7d874def7e1f270)

## Installation

```
npm install svelte-pagination

or

yarn add svelte-pagination
```

## Usage

```
<script>
  import Pagination from "svelte-pagination";

  let checkedValue = 1;

  function handleChange(e) {
    const { selected } = e.detail;
    checkedValue = selected;
  }
</script>

<Pagination
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handleChange} />
<br />

```

## API

### Props

| Prop Name              | Description | Default Value |
| ---------------------- | ----------- | ------------- |
| pageCount              |             | 10            |
| pageRangeDisplayed     |             | 2             |
| marginPagesDisplayed   |             | 3             |
| previousLabel          |             | "Previous"    |
| nextLabel              |             | "Next"        |
| breakLabel             |             | "..."         |
| hrefBuilder            |             |               |
| initialPage            |             |               |
| forcePage              |             |               |
| disableInitialCallback |             | false         |
| containerClassName     |             |               |
| pageClassName          |             |               |
| pageLinkClassName      |             |               |
| activeClassName        |             | "selected"    |
| activeLinkClassName    |             |               |
| previousClassName      |             | "previous"    |
| nextClassName          |             | "next"        |
| previousLinkClassName  |             |               |
| nextLinkClassName      |             |               |
| disabledClassName      |             | "disabled"    |
| breakClassName         |             |               |
| breakLinkClassName     |             |               |
| extraAriaContext       |             |               |
| ariaLabelBuilder       |             |               |
| startPageIndex         |             | 1             |

### Slots

NA

### Events

| Event Name | Description | `event.detail` info        |
| ---------- | ----------- | -------------------------- |
| change     |             | `{event: event, selected}` |

### Examples

[Click here](https://github.com/thecodejack/svelte-pagination/tree/master/stories/views) to view stories implementation

## Credits

TBD

## License

MIT
