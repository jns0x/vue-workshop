<template>
  <div>
    <li class="list--item">{{ products.joke }}
      <button v-on:click="removeItem()" class="remote--item">X</button>
    </li>
  </div>
</template>
<script>
export default {
  name: "ProductListItem",
  props: {
    products: {
      type: Object
    }
  },
  methods: {
    removeItem() {
      const payload = this.products.id;
      this.$store.dispatch("removeItem", payload);
    }
  }
};
</script>
<style>
.list--item {
  text-align: left;
  background: rgb(161, 225, 255);
  border-radius: 10px;
  padding: 5px;
  margin: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remote--item {
}
</style>

