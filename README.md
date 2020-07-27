# svelte-pagination

[![NPM](https://img.shields.io/npm/v/svelte-pagination.svg)](https://www.npmjs.com/package/svelte-pagination)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/svelte-pagination.svg)](https://www.npmjs.com/package/svelte-pagination)

SvelteJS component for switch or toggle a boolean. User would be able to drag or click for toggling.

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


```

## API

### Props

| Prop Name       | Description    | Default Value      |
| --------------- | -------------- | ------------------ |
| checked         | Required field | undefined          |
| disabled        |                | false              |
| offColor        |                | "#888"             |
| onColor         |                | "#080"             |
| offHandleColor  |                | "#fff"             |
| onHandleColor   |                | "#fff"             |
| handleDiameter  |                | 0                  |
| boxShadow       |                | null               |
| activeBoxShadow |                | "0 0 2px 3px #3bf" |
| height          |                | 28                 |
| width           |                | 56                 |
| id              |                | ''                 |
| containerClass  |                | ''                 |

### Slots

| Slot Name     | Description | Default Set? |
| ------------- | ----------- | ------------ |
| checkedIcon   |             | Yes          |
| unCheckedIcon |             | Yes          |

### Events

| Event Name | Description | `event.detail` info       |
| ---------- | ----------- | ------------------------- |
| change     |             | `{event: event, checked}` |

### Examples

[Click here](https://github.com/thecodejack/svelte-pagination/tree/master/stories/views) to view stories implementation

## Credits

TBD

## License

MIT
