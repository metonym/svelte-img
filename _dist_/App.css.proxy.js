// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-1bg3i1y{margin:0.5rem 0}.success.svelte-1bg3i1y{color:#42be65}span.svelte-1bg3i1y{color:#777}main.svelte-1bg3i1y{position:relative;max-width:48rem;padding:1rem;margin:0 auto}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}