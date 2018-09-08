<template>
  <div>
    <form @submit.prevent="addNew()">
      <input name="product"
        v-model="newItems.joke"
        v-validate="'required|min:3'"
         placeholder="add product"
         class="form-input"/>
      <button>Add new product</button>
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
        </div>
    </form>
  </div>
</template>
<script>
import uuid from "uuid/v4";
export default {
  name: "SubmitProduct",
  data() {
    return {
      newItems: {
        joke: ""
      }
    };
  },
  methods: {
    addNew() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.$emit("add-new-product", {
          id: uuid(),
          ...this.newItems
        });
        this.newItems.joke = "";
        this.$validator.reset();
      });
    }
  }
};
</script>

<style scoped>
</style>