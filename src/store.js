import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    url: "http://api.nbp.pl/api/exchangerates/tables/C/?format=json",
    results: null,
    favCurrencies: [],
    favouriteAdded: false,
    favouriteExists: false,
  },
  mutations: {
    setResults(state, res) {
      state.results = res.length && res[0].rates;
    },
    setFavourite(state, fav) {
      state.favCurrencies.push(fav);
    },
    deleteFavourite(state, del) {
      console.log(del);
      state.favCurrencies.splice(del, 1);
    },
    favouriteAdded(state) {
      state.favouriteAdded = true;
      state.favouriteExists = false;
    },
    favouriteDeleted(state) {
      state.favouriteAdded = false;
    },
    favouriteExists(state) {
      state.favouriteExists = true;
    },
  },
  actions: {
    async getCurrencies(context) {
      return new Promise((resolve) => {
        fetch(context.state.url)
          .then((resp) => {
            return resp.json();
          })
          .then((json) => {
            context.commit("setResults", json);
            resolve(json);
          });
      });
    },
    addFavourite(context, fav) {
      let favourite = context.getters.currencyRates.find((element) => element.code === fav);
      if (!context.state.favCurrencies.includes(favourite)) {
        context.commit("setFavourite", favourite);
        context.commit("favouriteAdded");
      } else context.commit("favouriteExists");
      localStorage.setItem("favCur", context.getters.getFavCodes.join(";"));
    },
    deleteFavourite(context, deleted) {
      let currentFav = context.state.favCurrencies.find((element) => element.code === deleted);
      const index = context.state.favCurrencies.indexOf(currentFav);
      if (index > -1) {
        context.commit("deleteFavourite", index);
        localStorage.setItem("favCur", context.getters.getFavCodes.join(";"));
      }
      if (!context.state.favCurrencies.length) {
        context.commit("favouriteDeleted");
      }
    },
  },
  getters: {
    currencyRates: (state) => {
      return state.results;
    },
    getFavCodes: (state) => {
      return state.favCurrencies.map((fav) => fav.code);
    },
  },
});

export default store;
