<template>
  <div class="container">
    <h1>Moje ulubione</h1>
    <table class="favTable">
      <tr>
        <th>Waluta</th>
        <th>Kod</th>
        <th>Kupno</th>
        <th>Sprzedaz</th>
      </tr>
      <tr v-for="fav in favCurrencies" :key="fav.code">
        <th>{{fav.currency}}</th>
        <th>{{fav.code}}</th>
        <th>{{fav.bid}}</th>
        <th>{{fav.ask}}</th>
        <th><button @click="deleteFavourite(fav.code)">Usuń</button></th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
props: ["code"],
  data: () => ({}),
  computed: {
    favCurrencies() {
      return this.$store.state.favCurrencies;
    }
  },
  methods: {
      deleteFavourite(code) {
          this.$store.dispatch('deleteFavourite', code)
      }
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 90%;
}
.favTable {
  width: 100%;
}
</style>