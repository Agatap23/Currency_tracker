<template>
  <div id="app">
    <selectField />
    <favourites />
    <all />
  </div>
</template>

<script>
import favourites from "./components/favourites";
import selectField from "./components/select";
import all from "./components/allCurrencies";

export default {
  name: "App",
  components: {
    selectField,
    favourites,
    all
  },
  created: async function() {
    await this.$store.dispatch("getCurrencies");
    const favCur = localStorage.getItem("favCur");
    if (favCur) {
      favCur.split(";").map(fav => {
        this.$store.dispatch("addFavourite", fav);
      });
    }
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
