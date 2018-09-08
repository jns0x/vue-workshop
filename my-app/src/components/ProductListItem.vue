<template>
  <div>
    <li>{{ products.name }}</li>
  </div>
</template>
<script>
export default {
  name: "ProductListItem",
  props: {
    products: {
      type: Object
    }
  }
};
</script>
