<template>
  <div id="app">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: medium;
    list-style: none;
  }
html,body,#app{
  width: 100%;
  height: 100%;
}
body {
  background: #eef2f3;
}
</style>
