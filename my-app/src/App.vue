<template>
  <div id="app">
    <h2>{{ heading }}</h2>
    <div v-if="sharedState.products.value">

      <submit-product @add-new-product="onAddProduct"></submit-product>
      <button v-on:click="onRemoveLast()">Remove last item</button>
      <button v-on:click="orderByName()">Order list by name</button>
      <Products :products="sharedState.products.value"></Products>
    </div>
  </div>
</template>

<script>
import Products from "./components/Products";
import SubmitProduct from "./components/SubmitProduct";
import store from "./store";

export default {
  name: "app",
  components: {
    Products,
    SubmitProduct
  },
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  data() {
    return {
      sharedState: store.state,
      heading: "Some Huck Norris jokes"
    };
  },

  methods: {
    //3/ 4. The important thing is to use function with execution-based context
    removeLast() {
      this.sharedState.pop();
    },
    onAddProduct(product) {
      this.$store.dispatch("addProduct", product);
    },
    onRemoveLast() {
      // const payload = this.sharedState.products;
      // payload.value.pop();
      // this.$store.dispatch("removeLast", payload);
      this.$store.dispatch("removeLast");
    },
    orderByName() {
      const payload = this.sharedState.products;
      function compare(a, b) {
        if (a.joke[1] < b.joke[1]) return -1;
        if (a.joke[1] > b.joke[1]) return 1;
        return 0;
      }

      payload.value.sort(compare);
      console.log(payload);
      this.$store.dispatch("orderByName", payload);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-input {
  outline: none;
  padding: 5px;
}
</style>
