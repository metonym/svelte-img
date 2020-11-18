// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-lxy8f0{position:relative;width:100%;height:0}img.svelte-lxy8f0{width:100%}img.loading.svelte-lxy8f0{opacity:0}img.svelte-lxy8f0:not(.loading){opacity:1;transition:opacity 250ms ease-out}.hide.svelte-lxy8f0{display:none}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}