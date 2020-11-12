<script>
  export let src = undefined;
  export let alt = "";
  export let size = "150x90";
  export let backgroundColor = "#f4f4f4";

  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  let img = undefined;
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

  $: [width, height] = size.split("x");
  $: if (img && src !== undefined) {
    load();
  }
</script>

<style>
  div {
    position: relative;
    width: 100%;
    height: 0;
  }

  img.loading {
    opacity: 0;
  }

  img:not(.loading) {
    opacity: 1;
    transition: opacity 250ms ease-out;
  }
</style>

<div style="background-color: {backgroundColor};">
  {#if loading}
    <slot name="loading" />
  {/if}
  {#if error}
    <slot name="error" />
  {/if}
  <img
    {...$$restProps}
    bind:this={img}
    style={`width: ${width}px; height: ${height}px;`}
    class:loading={loading && mounted}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseout
    {src}
    {alt} />
</div>
