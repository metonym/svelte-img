var app=function(){"use strict";function n(){}function t(n,t){for(const a in t)n[a]=t[a];return n}function a(n){return n()}function s(){return Object.create(null)}function e(n){n.forEach(a)}function o(n){return"function"==typeof n}function p(n,t){return n!=n?t==t:n!==t}function c(n,t,a,s){if(n){const e=l(n,t,a,s);return n[0](e)}}function l(n,a,s,e){return n[1]&&e?t(s.ctx.slice(),n[1](e(a))):s.ctx}function i(n,t,a,s,e,o,p){const c=function(n,t,a,s){if(n[2]&&s){const e=n[2](s(a));if(void 0===t.dirty)return e;if("object"==typeof e){const n=[],a=Math.max(t.dirty.length,e.length);for(let s=0;s<a;s+=1)n[s]=t.dirty[s]|e[s];return n}return t.dirty|e}return t.dirty}(t,s,e,o);if(c){const e=l(t,a,s,p);n.p(e,c)}}function r(n,t){const a={};t=new Set(t);for(const s in n)t.has(s)||"$"===s[0]||(a[s]=n[s]);return a}function u(n,t){n.appendChild(t)}function d(n,t,a){n.insertBefore(t,a||null)}function k(n){n.parentNode.removeChild(n)}function g(n){return document.createElement(n)}function f(){return n=" ",document.createTextNode(n);var n}function h(n,t,a,s){return n.addEventListener(t,a,s),()=>n.removeEventListener(t,a,s)}function m(n,t,a){null==a?n.removeAttribute(t):n.getAttribute(t)!==a&&n.setAttribute(t,a)}function v(n,t){const a=Object.getOwnPropertyDescriptors(n.__proto__);for(const s in t)null==t[s]?n.removeAttribute(s):"style"===s?n.style.cssText=t[s]:"__value"===s?n.value=n[s]=t[s]:a[s]&&a[s].set?n[s]=t[s]:m(n,s,t[s])}function y(n,t,a,s){n.style.setProperty(t,a,s?"important":"")}function $(n,t,a){n.classList[a?"add":"remove"](t)}let b;function w(n){b=n}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function _(){const n=x();return(t,a)=>{const s=n.$$.callbacks[t];if(s){const e=function(n,t){const a=document.createEvent("CustomEvent");return a.initCustomEvent(n,!1,!1,t),a}(t,a);s.slice().forEach((t=>{t.call(n,e)}))}}}function C(n,t){const a=n.$$.callbacks[t.type];a&&a.slice().forEach((n=>n(t)))}const L=[],H=[],T=[],E=[],M=Promise.resolve();let q=!1;function j(){q||(q=!0,M.then(A))}function S(n){T.push(n)}let N=!1;const I=new Set;function A(){if(!N){N=!0;do{for(let n=0;n<L.length;n+=1){const t=L[n];w(t),P(t.$$)}for(w(null),L.length=0;H.length;)H.pop()();for(let n=0;n<T.length;n+=1){const t=T[n];I.has(t)||(I.add(t),t())}T.length=0}while(L.length);for(;E.length;)E.pop()();q=!1,N=!1,I.clear()}}function P(n){if(null!==n.fragment){n.update(),e(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(S)}}const B=new Set;let O;function F(){O={r:0,c:[],p:O}}function R(){O.r||e(O.c),O=O.p}function D(n,t){n&&n.i&&(B.delete(n),n.i(t))}function z(n,t,a,s){if(n&&n.o){if(B.has(n))return;B.add(n),O.c.push((()=>{B.delete(n),s&&(a&&n.d(1),s())})),n.o(t)}}function G(n){n&&n.c()}function U(n,t,s){const{fragment:p,on_mount:c,on_destroy:l,after_update:i}=n.$$;p&&p.m(t,s),S((()=>{const t=c.map(a).filter(o);l?l.push(...t):e(t),n.$$.on_mount=[]})),i.forEach(S)}function J(n,t){const a=n.$$;null!==a.fragment&&(e(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function V(t,a,o,p,c,l,i=[-1]){const r=b;w(t);const u=a.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:s(),dirty:i,skip_bound:!1};let g=!1;if(d.ctx=o?o(t,u,((n,a,...s)=>{const e=s.length?s[0]:a;return d.ctx&&c(d.ctx[n],d.ctx[n]=e)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](e),g&&function(n,t){-1===n.$$.dirty[0]&&(L.push(n),j(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}(t,n)),a})):[],d.update(),g=!0,e(d.before_update),d.fragment=!!p&&p(d.ctx),a.target){if(a.hydrate){const n=function(n){return Array.from(n.childNodes)}(a.target);d.fragment&&d.fragment.l(n),n.forEach(k)}else d.fragment&&d.fragment.c();a.intro&&D(t.$$.fragment),U(t,a.target,a.anchor),A()}w(r)}class K{$destroy(){J(this,1),this.$destroy=n}$on(n,t){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(t),()=>{const n=a.indexOf(t);-1!==n&&a.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Q=n=>({}),W=n=>({}),X=n=>({}),Y=n=>({});function Z(n){let t;const a=n[12].loading,s=c(a,n,n[11],Y);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),t=!0},p(n,t){s&&s.p&&2048&t&&i(s,a,n,n[11],t,X,Y)},i(n){t||(D(s,n),t=!0)},o(n){z(s,n),t=!1},d(n){s&&s.d(n)}}}function nn(n){let t;const a=n[12].error,s=c(a,n,n[11],W);return{c(){s&&s.c()},m(n,a){s&&s.m(n,a),t=!0},p(n,t){s&&s.p&&2048&t&&i(s,a,n,n[11],t,Q,W)},i(n){t||(D(s,n),t=!0)},o(n){z(s,n),t=!1},d(n){s&&s.d(n)}}}function tn(n){let a,s,o,p,c,l,i,r,b=n[5]&&Z(n),w=n[6]&&nn(n),x=[n[9],{src:c=n[0]},{alt:n[1]}],_={};for(let n=0;n<x.length;n+=1)_=t(_,x[n]);return{c(){a=g("div"),b&&b.c(),s=f(),w&&w.c(),o=f(),p=g("img"),v(p,_),$(p,"loading",n[5]&&n[4]),$(p,"hide",n[6]),$(p,"svelte-iwy28q",!0),y(a,"padding-bottom",n[8]/n[7]*100+"%"),y(a,"background-color",n[2]),m(a,"class","svelte-iwy28q")},m(t,e){d(t,a,e),b&&b.m(a,null),u(a,s),w&&w.m(a,null),u(a,o),u(a,p),n[17](p),l=!0,i||(r=[h(p,"click",n[13]),h(p,"mouseover",n[14]),h(p,"mouseenter",n[15]),h(p,"mouseout",n[16])],i=!0)},p(n,[t]){n[5]?b?(b.p(n,t),32&t&&D(b,1)):(b=Z(n),b.c(),D(b,1),b.m(a,s)):b&&(F(),z(b,1,1,(()=>{b=null})),R()),n[6]?w?(w.p(n,t),64&t&&D(w,1)):(w=nn(n),w.c(),D(w,1),w.m(a,o)):w&&(F(),z(w,1,1,(()=>{w=null})),R()),v(p,_=function(n,t){const a={},s={},e={$$scope:1};let o=n.length;for(;o--;){const p=n[o],c=t[o];if(c){for(const n in p)n in c||(s[n]=1);for(const n in c)e[n]||(a[n]=c[n],e[n]=1);n[o]=c}else for(const n in p)e[n]=1}for(const n in s)n in a||(a[n]=void 0);return a}(x,[512&t&&n[9],(!l||1&t&&p.src!==(c=n[0]))&&{src:c},(!l||2&t)&&{alt:n[1]}])),$(p,"loading",n[5]&&n[4]),$(p,"hide",n[6]),$(p,"svelte-iwy28q",!0),(!l||384&t)&&y(a,"padding-bottom",n[8]/n[7]*100+"%"),(!l||4&t)&&y(a,"background-color",n[2])},i(n){l||(D(b),D(w),l=!0)},o(n){z(b),z(w),l=!1},d(t){t&&k(a),b&&b.d(),w&&w.d(),n[17](null),i=!1,e(r)}}}function an(n,a,s){let e,o;const p=["src","alt","ratio","backgroundColor"];let c=r(a,p),{$$slots:l={},$$scope:i}=a,{src:u}=a,{alt:d=""}=a,{ratio:k="16x9"}=a,{backgroundColor:g="#f4f4f4"}=a;const f=_();let h=null,m=!1,v=-1,y=0,$=!0,b=!1;var w;function L(n){s(5,$=!1),v=0,y=performance.now()-v,f(n,{timing:y})}return w=()=>{s(4,m=!0)},x().$$.on_mount.push(w),n.$$set=n=>{a=t(t({},a),function(n){const t={};for(const a in n)"$"!==a[0]&&(t[a]=n[a]);return t}(n)),s(9,c=r(a,p)),"src"in n&&s(0,u=n.src),"alt"in n&&s(1,d=n.alt),"ratio"in n&&s(10,k=n.ratio),"backgroundColor"in n&&s(2,g=n.backgroundColor),"$$scope"in n&&s(11,i=n.$$scope)},n.$$.update=()=>{1024&n.$$.dirty&&s(7,[e,o]=k.split("x"),e,(s(8,o),s(10,k))),9&n.$$.dirty&&h&&void 0!==u&&(s(5,$=!0),s(6,b=!1),v=performance.now(),s(3,h.src=u,h),s(3,h.onload=()=>{L("load")},h),s(3,h.onerror=()=>{s(6,b=!0),L("error")},h))},[u,d,g,h,m,$,b,e,o,c,k,i,l,function(t){C(n,t)},function(t){C(n,t)},function(t){C(n,t)},function(t){C(n,t)},function(n){H[n?"unshift":"push"]((()=>{h=n,s(3,h)}))}]}class sn extends K{constructor(n){var t;super(),document.getElementById("svelte-iwy28q-style")||((t=g("style")).id="svelte-iwy28q-style",t.textContent="div.svelte-iwy28q{position:relative;width:100%;height:0}img.svelte-iwy28q{width:100%}img.loading.svelte-iwy28q{opacity:0}img.svelte-iwy28q:not(.loading){opacity:1;transition:opacity 250ms ease-out}.hide.svelte-iwy28q{display:none}",u(document.head,t)),V(this,n,an,tn,p,{src:0,alt:1,ratio:10,backgroundColor:2})}}function en(n){let t;return{c(){t=g("div"),t.textContent="Loading...",m(t,"slot","loading")},m(n,a){d(n,t,a)},d(n){n&&k(t)}}}function on(n){let t;return{c(){t=g("div"),t.textContent="An error occurred.",m(t,"slot","error")},m(n,a){d(n,t,a)},d(n){n&&k(t)}}}function pn(t){let a;return{c(){a=f()},m(n,t){d(n,a,t)},p:n,d(n){n&&k(a)}}}function cn(n){let t,a,s,o,p,c,l,i,r,v,y,$,b,w,x,_,C,L,H,T,E,M,q,j,S,N,I,A,P,B,O,F,R,V,K,Q,W,X,Y,Z,nn,tn,an,cn,ln,rn,un,dn,kn,gn,fn,hn,mn,vn,yn,$n,bn,wn,xn,_n,Cn,Ln,Hn,Tn,En,Mn,qn,jn,Sn,Nn,In,An,Pn,Bn,On,Fn,Rn,Dn,zn,Gn,Un,Jn,Vn,Kn;return A=new sn({props:{src:n[0],backgroundColor:"#e0e0e0",ratio:"800x437",alt:"Nighthawks, 1942 painting by Edward Hopper",$$slots:{default:[pn],error:[on],loading:[en]},$$scope:{ctx:n}}}),rn=new sn({props:{src:"https://place-hold.it/160x90",ratio:"16x9"}}),{c(){t=g("main"),a=g("h1"),a.textContent="svelte-img",s=f(),o=g("p"),o.innerHTML='<a href="https://npmjs.com/package/svelte-img"><img src="https://img.shields.io/npm/v/svelte-img.svg?color=blue&amp;style=for-the-badge" alt="NPM"/></a>\n[![Build][build]][build-badge]',p=f(),c=g("blockquote"),c.innerHTML="<p>Responsive image loading component for Svelte.</p>",l=f(),i=g("p"),i.textContent="This component fades in an image when loaded.",r=f(),v=g("p"),v.innerHTML="Even with JavaScript disabled, an image can still be loaded without resorting to the <code>noscript</code> tag.",y=f(),$=g("p"),$.innerHTML='<a href="https://github.com/metonym/svelte-img.git">GitHub repo</a>',b=f(),w=g("hr"),x=f(),_=g("p"),_.innerHTML="<strong>Table of Contents</strong>",C=g("ul"),C.innerHTML='<li><a href="#install">Install</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#basic">Basic</a></li> \n<li><a href="#responsive-placeholder">Responsive placeholder</a></li> \n<li><a href="#slots">Slots</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#props">Props</a></li> \n<li><a href="#dispatched-events">Dispatched events</a></li> \n<li><a href="#forwarded-events">Forwarded events</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',L=f(),H=g("h2"),H.textContent="Install",T=f(),E=g("pre"),M=f(),q=g("h2"),q.textContent="Usage",j=f(),S=g("h3"),S.textContent="Basic",N=f(),I=g("div"),G(A.$$.fragment),P=f(),B=g("div"),B.innerHTML='<a href="https://commons.wikimedia.org/wiki/File:Nighthawks_by_Edward_Hopper_1942.jpg" target="_blank" rel="noopener">Nighthawks, 1942 painting by Edward Hopper</a> \n  <span>(file size: 8.13 MB)</span>',O=f(),F=g("button"),F.textContent="Reload",R=f(),V=g("button"),V.textContent="Simulate error",K=g("pre"),Q=f(),W=g("h3"),W.textContent="Responsive placeholder",X=f(),Y=g("p"),Y.innerHTML='The component maintains a fluid aspect ratio to avoid <a href="https://css-tricks.com/the-fight-against-layout-jank/">layout jank</a>.',Z=f(),nn=g("p"),nn.innerHTML="Specify the aspect ratio (width x height) of the image using the <code>ratio</code> prop.",tn=f(),an=g("p"),an.innerHTML="For example, an image ratio that has a width of 800px and height of 437px would be <code>800x437</code>.",cn=f(),ln=g("div"),G(rn.$$.fragment),un=g("pre"),dn=f(),kn=g("h3"),kn.textContent="Slots",gn=f(),fn=g("p"),fn.textContent="Loading and error states can be displayed using named slots.",hn=f(),mn=g("pre"),vn=f(),yn=g("h2"),yn.textContent="API",$n=f(),bn=g("h3"),bn.textContent="Props",wn=f(),xn=g("table"),xn.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">src</td> \n<td style="text-align:left"><code>string</code> (default: <code>undefined</code>)</td></tr> \n<tr><td style="text-align:left">alt</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;&quot;</code>)</td></tr> \n<tr><td style="text-align:left">ratio</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;16x9&quot;</code></td></tr> \n<tr><td style="text-align:left">backgroundColor</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;#f4f4f4&quot;</code>)</td></tr></tbody>',_n=f(),Cn=g("h3"),Cn.textContent="Dispatched events",Ln=f(),Hn=g("ul"),Hn.innerHTML="<li><strong>on:load</strong>: fired when the image is loaded</li> \n<li><strong>on:error</strong>: fired if an error occurs</li>",Tn=f(),En=g("h3"),En.textContent="Forwarded events",Mn=f(),qn=g("p"),qn.innerHTML="The following events are forwarded to the <code>img</code> element.",jn=f(),Sn=g("ul"),Sn.innerHTML="<li>on:click</li> \n<li>on:mouseover</li> \n<li>on:mouseenter</li> \n<li>on:mouseout</li>",Nn=f(),In=g("h2"),In.textContent="TypeScript",An=f(),Pn=g("p"),Pn.textContent="Svelte version 3.31 or greater is required if using TypeScript.",Bn=f(),On=g("h2"),On.textContent="Changelog",Fn=f(),Rn=g("p"),Rn.innerHTML='<a href="https://github.com/metonym/svelte-img/tree/master/CHANGELOG.md">Changelog</a>',Dn=f(),zn=g("h2"),zn.textContent="License",Gn=f(),Un=g("p"),Un.innerHTML='<a href="https://github.com/metonym/svelte-img/tree/master/LICENSE">MIT</a>',m(a,"id","svelte-img"),m(H,"id","install"),m(E,"class","language-bash"),m(q,"id","usage"),m(S,"id","basic"),m(F,"type","button"),m(V,"type","button"),m(I,"class","code-fence"),m(K,"class","language-svelte"),m(K,"data-svelte",""),m(W,"id","responsive-placeholder"),m(ln,"class","code-fence"),m(un,"class","language-svelte"),m(un,"data-svelte",""),m(kn,"id","slots"),m(mn,"class","language-html"),m(yn,"id","api"),m(bn,"id","props"),m(Cn,"id","dispatched-events"),m(En,"id","forwarded-events"),m(In,"id","typescript"),m(On,"id","changelog"),m(zn,"id","license"),m(t,"class","markdown-body")},m(e,k){d(e,t,k),u(t,a),u(t,s),u(t,o),u(t,p),u(t,c),u(t,l),u(t,i),u(t,r),u(t,v),u(t,y),u(t,$),u(t,b),u(t,w),u(t,x),u(t,_),u(t,C),u(t,L),u(t,H),u(t,T),u(t,E),E.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-img\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-img\n',u(t,M),u(t,q),u(t,j),u(t,S),u(t,N),u(t,I),U(A,I,null),u(I,P),u(I,B),u(I,O),u(I,F),u(I,R),u(I,V),u(t,K),K.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Img <span class="token keyword">from</span> <span class="token string">"svelte-img"</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> tick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> url <span class="token operator">=</span>\n    <span class="token string">"https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg"</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> src <span class="token operator">=</span> url<span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Img</span>\n  <span class="token language-javascript"><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span>\n  <span class="token attr-name">backgroundColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#e0e0e0<span class="token punctuation">"</span></span>\n  <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>800x437<span class="token punctuation">"</span></span>\n  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Nighthawks, 1942 painting by Edward Hopper<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>An error occurred.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Img</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://commons.wikimedia.org/wiki/File:Nighthawks_by_Edward_Hopper_1942.jpg<span class="token punctuation">"</span></span>\n    <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noopener<span class="token punctuation">"</span></span>\n  <span class="token punctuation">></span></span>\n    Nighthawks, 1942 painting by Edward Hopper\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>(file size: 8.13 MB)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    src <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n    <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>src <span class="token operator">=</span> url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>Reload<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>src <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Simulate error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n',u(t,Q),u(t,W),u(t,X),u(t,Y),u(t,Z),u(t,nn),u(t,tn),u(t,an),u(t,cn),u(t,ln),U(rn,ln,null),u(t,un),un.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://place-hold.it/160x90<span class="token punctuation">"</span></span> <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>16x9<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',u(t,dn),u(t,kn),u(t,gn),u(t,fn),u(t,hn),u(t,mn),mn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://place-hold.it/400x300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>An error occurred.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Img</span><span class="token punctuation">></span></span>\n',u(t,vn),u(t,yn),u(t,$n),u(t,bn),u(t,wn),u(t,xn),u(t,_n),u(t,Cn),u(t,Ln),u(t,Hn),u(t,Tn),u(t,En),u(t,Mn),u(t,qn),u(t,jn),u(t,Sn),u(t,Nn),u(t,In),u(t,An),u(t,Pn),u(t,Bn),u(t,On),u(t,Fn),u(t,Rn),u(t,Dn),u(t,zn),u(t,Gn),u(t,Un),Jn=!0,Vn||(Kn=[h(F,"click",n[1]),h(V,"click",n[2])],Vn=!0)},p(n,[t]){const a={};1&t&&(a.src=n[0]),8&t&&(a.$$scope={dirty:t,ctx:n}),A.$set(a)},i(n){Jn||(D(A.$$.fragment,n),D(rn.$$.fragment,n),Jn=!0)},o(n){z(A.$$.fragment,n),z(rn.$$.fragment,n),Jn=!1},d(n){n&&k(t),J(A),J(rn),Vn=!1,e(Kn)}}}let ln="https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg";function rn(n,t,a){let s=ln;return[s,()=>{a(0,s=void 0),(j(),M).then((()=>a(0,s=ln)))},()=>a(0,s=ln+"1")]}return new class extends K{constructor(n){super(),V(this,n,rn,cn,p,{})}}({target:document.body})}();
