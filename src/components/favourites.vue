<template>
  <div class="container">
    <h1>Moje ulubione</h1>
    <table class="favTable">
      <tr v-if="favouriteAdded" class="favHeader">
        <th>Waluta</th>
        <th>Kod</th>
        <th>Kupno</th>
        <th>Sprzedaz</th>
        <th></th>
      </tr>
      <tr v-for="fav in favCurrencies" :key="fav.code">
        <th>{{fav.currency}}</th>
        <th>{{fav.code}}</th>
        <th>{{fav.bid}}</th>
        <th>{{fav.ask}}</th>
        <th>
          <button @click="deleteFavourite(fav.code)">
            Usuń
          </button>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    favCurrencies() {
      return this.$store.state.favCurrencies;
    },
    favouriteAdded() {
      return this.$store.state.favouriteAdded;
    }
  },
  methods: {
    deleteFavourite(code) {
      this.$store.dispatch("deleteFavourite", code);
    }
  }
};
</script>

<style lang="css" scoped>
.favTable {
  width: 100%;
}
.favHeader {
  background-color: rgb(46, 92, 184);
  color: white;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>