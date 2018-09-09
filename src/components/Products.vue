<template>
  <div>
    <p v-if="!products">No products!</p>
    <ul>
      <ProductListItem v-for="p in products" :key="p.id" :products="p"></ProductListItem>
    </ul>
  </div>
</template>


<script>
import ProductListItem from "./ProductListItem";
export default {
  components: {
    ProductListItem
  },
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    products: {
      type: Array
    }
  }
};
</script>

<style scoped>
</style>