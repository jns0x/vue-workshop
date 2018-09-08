<template>
<div>
  <p v-if="!products.length">No products!</p>
  <ul>
    <li v-for="p in products" :key="p.id">{{ p.name }}</li>
  </ul>
</div>
</template>


<script>
export default {
  name: "Products",
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