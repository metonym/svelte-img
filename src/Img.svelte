<script>
  /**
   * @event {{ timing: number; }} load
   * @event {{ timing: number; }} error
   */

  /**
   * Specify the image source
   * @type {string}
   */
  export let src = undefined;
  export let alt = "";
  export let ratio = "16x9";
  export let backgroundColor = "#f4f4f4";

  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  let img = null;
  let mounted = false;
  let start = -1;
  let timing = 0;
  let loading = true;
  let error = false;

  onMount(() => {
    mounted = true;
  });

  function benchmark(event) {
    loading = false;
    start = 0;
    timing = performance.now() - start;

    dispatch(event, { timing });
  }

  function load() {
    loading = true;
    error = false;
    start = performance.now();

    img.src = src;

    img.onload = () => {
      benchmark("load");
    };

    img.onerror = () => {
      error = true;
      benchmark("error");
    };
  }

  $: [width, height] = ratio.split("x");
  $: if (img && src !== undefined) load();
</script>

<style>
  div {
    position: relative;
    width: 100%;
    height: 0;
  }

  img {
    width: 100%;
  }

  img.loading {
    opacity: 0;
  }

  img:not(.loading) {
    opacity: 1;
    transition: opacity 250ms ease-out;
  }
  .hide {
    display: none;
  }
</style>

<div
  style="padding-bottom: {(height / width) * 100}%; background-color: {backgroundColor};">
  {#if loading}
    <slot name="loading" />
  {/if}
  {#if error}
    <slot name="error" />
  {/if}
  <img
    {...$$restProps}
    bind:this={img}
    class:loading={loading && mounted}
    class:hide={error}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseout
    {src}
    {alt} />
</div>
