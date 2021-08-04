<script lang="ts">
  import Img from "../types";
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
  on:load={(e) => {
    console.log(e.detail);
  }}
  on:error={(e) => {
    console.log(e.detail);
  }}
>
  <div slot="loading">Loading...</div>
  <div slot="error">An error occurred.</div>
</Img>

<button type="button" on:click={reload}>Reload</button>
<button type="button" on:click={() => (src = url + "1")}>Simulate error</button>
