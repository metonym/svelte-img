# svelte-img

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Responsive image loading component for Svelte.

This component fades in an image when loaded.

Even with JavaScript disabled, an image can still be loaded without resorting to the `noscript` tag.

## Install

```bash
yarn add -D svelte-img
# OR
npm i -D svelte-img
```

## Usage

```svelte
<script>
  import Img from "svelte-img";
  import { tick } from "svelte";

  let url =
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg";
  let src = url;

  function reload() {
    src = undefined;
    tick().then(() => {
      src = url;
    });
  }
</script>

<Img
  {src}
  backgroundColor="#e0e0e0"
  ratio="800x437"
  alt="Nighthawks, 1942 painting by Edward Hopper"
>
  <div slot="loading">Loading...</div>
  <div slot="error">An error occurred.</div>
</Img>

<div>
  <a
    href="https://commons.wikimedia.org/wiki/File:Nighthawks_by_Edward_Hopper_1942.jpg"
    target="_blank"
    rel="noopener"
  >
    Nighthawks, 1942 painting by Edward Hopper
  </a>
  <span>(file size: 8.13 MB)</span>
</div>

<button type="button" on:click={reload}>Reload</button>

<button type="button" on:click={() => (src = url + '1')}>Simulate error</button>
```

### Responsive placeholder

The component maintains a fluid aspect ratio to avoid [layout jank](https://css-tricks.com/the-fight-against-layout-jank/).

Specify the aspect ratio (width x height) of the image using the `ratio` prop.

For example, an image ratio that has a width of 800px and height of 437px would be `800x437`.

```svelte
<Img src="https://place-hold.it/160x90" ratio="16x9" />
```

### Slots

Loading and error states can be displayed using named slots.

```html
<Img src="https://place-hold.it/400x300">
  <div slot="loading">Loading...</div>
  <div slot="error">An error occurred.</div>
</Img>
```

## API

| Property name   | Value                           |
| :-------------- | :------------------------------ |
| src             | `string` (default: `undefined`) |
| alt             | `string` (default: `""`)        |
| ratio           | `string` (default: `"16x9"`     |
| backgroundColor | `string` (default: `"#f4f4f4"`) |

## Dispatched events

- **on:load**: fired when the image is loaded
- **on:error**: fired if an error occurs

## Forwarded events

The following events are forwarded to the `img` element.

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-img.svg?color=blue&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-img
[build]: https://img.shields.io/travis/com/metonym/svelte-img?style=for-the-badge
[build-badge]: https://travis-ci.com/metonym/svelte-img
