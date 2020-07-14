<template>
<div>
  <select v-model="favourite">
      <option v-for="curr in rates" :key="curr.code"> {{curr.code}} </option>
  </select>
  <button class="addFav" @click="addFavourite(favourite)">Add</button>
</div>
</template>

<script>
export default {
    data: () => ({
        favourite: 'USD',
    }),
    computed: {
        rates() {
            return this.$store.getters.currencyRates;
        }
    },
    methods: {
        addFavourite(fav) {
            this.$store.dispatch('addFavourite', fav);
        }
    }
}
</script>

<style>

</style>