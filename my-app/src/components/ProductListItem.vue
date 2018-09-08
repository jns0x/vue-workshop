<template>
  <div>
    <li v-for="p in products" :key="p.id">{{ p.name }}</li>
  </div>
</template>
<script>
export default {
  name: "ProductListItem",
  props: {
    products: {
      type: Array
    }
  }
};
</script>
