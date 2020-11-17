# svelte-img

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Responsive image loading component.

This component fades in an image when loaded.

Even with JavaScript disabled, an image can still be loaded without resorting to the `noscript` tag.

## Install

```sh
yarn add -D svelte-img
# OR
npm i -D svelte-img
```

## Usage

```svelte
<script>
  import Img from "svelte-img";
</script>

<Img src="https://place-hold.it/800x600" />
```

### Responsive placeholder

The component maintains a fluid aspect ratio to avoid [layout jank](https://css-tricks.com/the-fight-against-layout-jank/).

Specify the aspect ratio (`"{width}x{height}"`) of the image using the `ratio` prop.

For example, an image ratio that has a width of 800px and height of 437px would be `800x437`.

```svelte
<Img src="https://place-hold.it/400x300" ratio="4x3" />
```

### Slots

Loading and error states can be displayed using named slots.

```svelte
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

- on:load (fired when the image is loaded)
- on:error (fired if a loading error occurs)

## Forwarded events

The following events are forwarded to the `img` element.

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-img.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-img
[build]: https://travis-ci.com/metonym/svelte-img.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-img
