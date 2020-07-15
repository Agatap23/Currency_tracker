<template>
  <div class="container">
    <h1>Wszystkie kursy</h1>
    <table class="allTable">
      <tr class="allHeader">
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
      return this.$store.getters.currencyRates;
    }
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.allTable {
  width: 100%;
}
.allHeader {
  background-color: rgb(46, 92, 184);
  color: white;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>