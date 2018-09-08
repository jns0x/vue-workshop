<template>
 <div id="app">
    <h2>{{ heading }}</h2>
    <p>Products in list: {{ products.length }}</p>
    <products :products="products"></products>
    <button v-on:click="removeLast()">Remove last item</button>
    <form @submit.prevent="addNew()">
      <input name="product"
        v-model="newItems.name"
        v-validate="'required|min:3'"
         placeholder="add product"
         class="form-input">
      <button>Add new product</button>
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
        </div>
    </form>
  </div>
</template>

<script>
import Products from "./components/Products";

export default {
  name: "app",
  components: {
    Products
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
    addNew() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.products.push({
          id: this.getNewId(),
          ...this.newItems
        });
        this.newItems.name = "";
        this.$validator.reset();
      });
    },
    getNewId() {
      return this.products.length === 0 ? 0 : this.products.length + 1;
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
