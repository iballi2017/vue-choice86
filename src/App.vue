<template>
  <div id="app">
    <MainNav />
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from "./components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
