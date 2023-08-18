<template>
  <AppHeader />
  <NewsList />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import NewsList from "./components/NewsList.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    NewsList,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
