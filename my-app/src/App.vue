<template>
 <div id="app">
    <h2>{{ heading }}</h2>
    <div v-if="sharedState.products.value">
      <!-- <p>{{ sharedState.products.value}}</p> -->
      <!-- <p>Products in list: {{ sharedState.products.value.length }}</p> -->
      <Products :products="sharedState.products.value"></Products>

      <submit-product @add-new-product="onAddProduct"></submit-product>
      <button v-on:click="onRemoveLast()">Remove last item</button>
      <button v-on:click="orderStuff()">Order list by name</button>
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
      heading: "Test"
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
    onRemoveLast(product) {
      store.removeProduct();
    },
    orderStuff(products) {
      // console.log(this.sharedState);
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
