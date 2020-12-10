<script lang="ts">
  import Img from "./types";
  import { tick } from "svelte";

  let url = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg";
  let src = url;

  function reload() {
    src = undefined;
    tick().then(() => {
      src = url;
    });
  }
</script>

<Img {src} backgroundColor="#e0e0e0" ratio="800x437" alt="Nighthawks, 1942 painting by Edward Hopper">
  <div slot="loading">Loading...</div>
  <div slot="error">An error occurred.</div>
</Img>
