<template>
  <div>
    <li class="list--item">{{ products.joke }}</li>
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
<style>
.list--item {
  text-align: left;
}
</style>

