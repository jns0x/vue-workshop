<template>
  <div>
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
import uuid from "uuid/v4";
export default {
  name: "SubmitProduct",
  data() {
    return {
      newItems: {
        name: ""
      }
    };
  },
  methods: {
    //3/ 4. The important thing is to use function with execution-based context
    addNew() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.$emit("add-new-product", {
          id: uuid(),
          ...this.newItems
        });
        this.newItems.name = "";

        this.$validator.reset();
      });
    }
  }
};

// getNewId() {
//   return this.products.length === 0 ? 0 : this.products.length + 1;
// }
</script>

<style scoped>
</style>