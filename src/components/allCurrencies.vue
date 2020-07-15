<template>
  <div>
      <h1>Wszystkie kursy</h1>
      <table class="allTable">
        <tr>
        <th>Waluta</th>
        <th>Kod</th>
        <th>Kupno</th>
        <th>Sprzedaz</th>
      </tr>
      <tr v-for="item in results" :key="item.code">
        <th>{{item.currency}}</th>
        <th>{{item.code}}</th>
        <th>{{item.bid}}</th>
        <th>{{item.ask}}</th>
      </tr>
      </table>
  </div>
</template>

<script>
export default {
    data: () => ({}),
  computed: {
    results() {
        return this.$store.getters.currencyRates
    }
  },
}
</script>

<style>
.allTable {
    width: 100%;
}
</style>