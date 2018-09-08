<template>
  <div>
    <li>{{ products.joke }}</li>
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
