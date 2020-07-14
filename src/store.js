import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        url: 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json',
        results: undefined,
        favCurrencies: []
    },
    mutations: {
        setResults(state, res) {
            state.results = res;
        },
        setFavourite(state, fav) {
            state.favCurrencies.push(fav);
        },
        deleteFav(state, del) {
            state.favCurrencies.splice(del, 1);
        }
    },
    actions: {
        async getCurrencies(context) {
            return new Promise((resolve) => {
                fetch(context.state.url).then(resp => {
                    return resp.json();
                }).then(json => {
                    resolve(json);
                })
            }).then(results => {
                context.commit('setResults', results);
            })
        },
        addFavourite(context, fav) {
            context.getters.currencyRates.find(element => {
                if(element.code === fav) {
                    context.commit('setFavourite', element);
                }
            })

        },
        deleteFavourite(context, deleted) {
            let currentFav
            context.state.favCurrencies.find(element => {
                if(element.code === deleted) {
                    currentFav = deleted;
                }
            })
            const index = context.state.favCurrencies.indexOf(currentFav);
            if(index > -1) {
                context.commit('deleteFav', index)
            }
        }
    },
    getters: {
        currencyRates: state => {
            if(state.results != undefined) {
                return state.results[0].rates;
            }
        }
    }
})

export default store;