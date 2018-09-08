<template>
 <div id="app">
    <h2>{{ heading }}</h2>
    <p>Products in list: {{ products.length }}</p>
    <p v-if="!products.length">No products!</p>
    <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    <button v-on:click="removeLast()">Remove last item</button>
    <form @submit.prevent="addNew()">
      <input name="product"
        v-model="newItems.name"
        v-validate="'required|min:3'"
         placeholder="add product">
      <button>Add new product</button>
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
        </div>
    </form>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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
</style>
