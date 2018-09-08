import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, payload) {
      state.products.value.push(payload.product);
    },
    setProducts(state, payload) {
      state.products = payload.products;
    },
    removeLast(state) {
      state.products.value.pop();
    },
    orderByName(state, payload) {
      state.products = payload.products;
    },
    removeItem(state, payload) {
      state.products.value = payload.products;
    }
  },
  actions: {
    addProduct(store, payload) {
      store.commit({
        type: "addProduct",
        product: payload
      });
    },
    async getProducts({ commit }) {
      const payload = await axios
        .get("http://api.icndb.com/jokes/random/10")
        .then(res => res.data);
      commit({
        type: "setProducts",
        products: payload
      });
    },
    removeLast(store) {
      // console.log(store);
      // console.log(payload);
      // console.log(store);
      // const stuff = this.state.products.value.pop();
      store.commit({
        type: "removeLast"
        // products: payload
      });
    },
    orderByName(store, payload) {
      store.commit({
        type: "orderByName",
        products: payload
      });
    },
    removeItem(store, payload) {
      const updatedByPayload = this.state.products.value.filter(
        el => el.id !== payload
      );
      store.commit({
        type: "removeItem",
        products: updatedByPayload
      });
    }
  },
  plugins: [createLogger()]
});
