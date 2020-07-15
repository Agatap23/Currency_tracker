<template>
  <div class="container">
    <select v-model="favourite">
      <option v-for="curr in rates" :key="curr.code">{{curr.code}}</option>
    </select>
    <button class="addFav" @click="addFavourite(favourite)">Dodaj do ulubionych</button>
    <p v-if="favouriteExists">Ta waluta ju istnieje wśród ulubionych!</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    favourite: "USD"
  }),
  computed: {
    rates() {
      return this.$store.getters.currencyRates;
    },
    favouriteExists() {
      return this.$store.state.favouriteExists;
    }
  },
  methods: {
    addFavourite(fav) {
      this.$store.dispatch("addFavourite", fav);
    }
  }
};
</script>

<style scoped>
select {
  width: 100px;
}
.addFav {
  border: none;
  border-radius: 5%;
  height: 20px;
  background-color: rgb(46, 92, 184);
  color: white;
}
</style>