module.exports = {
  mount: { public: "/", src: "/_dist_" },
  plugins: ["@snowpack/plugin-svelte"],
  buildOptions: { baseUrl: "/svelte-img" },
};
