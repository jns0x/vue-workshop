<template>
 <div id="app">
    <h2>{{ heading }}</h2>
    <p>Products in list: {{ products.length }}</p>
    <Products :products="products"></Products>
    <submit-product @add-new-product="onAddProduct"></submit-product>
    <button v-on:click="removeLast()">Remove last item</button>

  </div>
</template>

<script>
import Products from "./components/Products";
import SubmitProduct from "./components/SubmitProduct";

export default {
  name: "app",
  components: {
    Products,
    SubmitProduct
  },
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Coffee"
        },
        {
          id: 1,
          name: "Pizza"
        },
        {
          id: 2,
          name: "Cebula"
        }
      ],
      newItems: {
        name: ""
      },
      heading: "Test"
    };
  },
  methods: {
    //3/ 4. The important thing is to use function with execution-based context
    removeLast() {
      this.products.pop();
    },
    onAddProduct(product) {
      this.products.push(product);
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
