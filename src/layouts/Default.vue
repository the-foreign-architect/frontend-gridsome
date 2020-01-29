<template>
  <div>
    <a id="top" />
    <header class="p-4 mb-4 sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center justify-between mb-4 sm:m-0">
        <p class="text-xl font-bold tracking-wide uppercase">
          <g-link to="/" class="no-decoration">{{
            $static.metadata.siteName
          }}</g-link>
        </p>
        <div class="sm:hidden">
          <button @click="showMenu = !showMenu">X</button>
        </div>
      </div>
      <nav :class="showMenu ? 'block' : 'hidden'" class="sm:block">
        <ul class="text-sm font-semibold uppercase sm:flex">
          <li class="mr-2">
            <g-link to="/guides">Guides</g-link>
          </li>
          <li class="mr-2">
            <g-link to="/blog/">Blog</g-link>
          </li>
          <li class="mr-2">
            <g-link to="/about/">About</g-link>
          </li>
          <li>
            <g-link to="/newsletter/">Newsletter</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="px-4 py-6 text-center text-white bg-black">
      <div class="mb-8">
        <a
          class="bmc-button"
          target="_blank"
          href="https://www.buymeacoffee.com/TFA"
          ><img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          /><span style="margin-left:15px;font-size:28px !important;"
            >Buy me a coffee</span
          ></a
        >
      </div>
      <ul class="flex justify-center mb-4 text-sm font-semibold uppercase">
        <li class="mr-2">
          <a href="#top" class="white-link">&uarr; Top</a>
        </li>
        <li class="mr-2">
          <g-link to="/guides/" class="white-link">Guides</g-link>
        </li>
        <li class="mr-2">
          <g-link to="/blog/" class="white-link">Blog</g-link>
        </li>
        <li class="mr-2">
          <g-link to="/about/" class="white-link">About</g-link>
        </li>
        <li>
          <g-link to="/newsletter/" class="white-link">Newsletter</g-link>
        </li>
      </ul>
      <p class="text-xs">
        © 2019, Daniel da Rocha<br />Made with &hearts; and
        <a href="https://gridsome.org/" class="white-link">Gridsome</a>.
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s - The Foreign Architect",
    htmlAttrs: {
      lang: "en"
    }
  },
  data() {
    return {
      showMenu: false
    };
  }
};
</script>

<style>
.bmc-button img {
  width: 35px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button {
  padding: 7px 10px 7px 10px !important;
  line-height: 35px !important;
  height: 51px !important;
  min-width: 217px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #000000 !important;
  background-color: #ffdd00 !important;
  border-radius: 5px !important;
  border: 1px solid transparent !important;
  padding: 7px 10px 7px 10px !important;
  font-size: 28px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family: "Cookie", cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}
.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color: #000000 !important;
}
</style>
