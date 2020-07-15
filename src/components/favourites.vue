<template>
  <div class="container">
    <h1>Moje ulubione</h1>
    <table v-if="favouriteAdded" class="favTable">
      <tr class="favHeader">
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
          <button @click="deleteFavourite(fav.code)" class="deleteBtn">
            <Delete-icon />
          </button>
        </th>
      </tr>
    </table>
    <div v-else class="noFavourites">
      <p>Nie dodano jeszcze ulubionych walut.</p>
    </div>
  </div>
</template>

<script>
import DeleteIcon from "vue-material-design-icons/Delete.vue";

export default {
  data: () => ({}),
  components: {
    DeleteIcon
  },
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
.container {
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
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
.deleteBtn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.noFavourites {
  background-color: rgba(221, 221, 221, 0.4);
  width: 100%;
  line-height: 40px;
}
</style>