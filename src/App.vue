<template>
  <div id="app">
    <selectField />
    <favourites />
  </div>
</template>

<script>
import favourites from "./components/favourites";
import selectField from "./components/select";

export default {
  name: "App",
  components: {
    selectField,
    favourites
  },

  mounted: function() {
    this.$store.dispatch("getCurrencies");
  }
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
