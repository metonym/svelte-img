<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: "Public Sans", sans-serif;
    font-weight: 500;
    overflow-y: scroll;
    letter-spacing: 0.01rem;
    background-color: #f4f4f4;
    color: #161616;
  }

  main {
    position: relative;
    max-width: 48rem;
    padding: 1rem;
    margin: 0 auto;
  }
</style>

<main>
  <slot />
</main>
