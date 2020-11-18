<script>
  import Img from "./Img.svelte";

  let timing = -1;

  $: text =
    timing > 0 ? `Loaded in ${(timing / 1000).toFixed(2)}s` : "Loading...";
  $: success = timing > 0;
</script>

<main>
  <Img
    backgroundColor="#e0e0e0"
    ratio="800x437"
    src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg"
    alt="Nighthawks, 1942 painting by Edward Hopper"
    on:load={({ detail }) => {
      timing = detail.timing;
    }} />

  <div>
    <a
      href="https://commons.wikimedia.org/wiki/File:Nighthawks_by_Edward_Hopper_1942.jpg"
      target="_blank"
      rel="noopener">
      Nighthawks, 1942 painting by Edward Hopper
    </a>
    <span>(6,000 × 3,274 pixels, file size: 8.13 MB)</span>
  </div>
  <div class:success>{text}</div>
</main>
