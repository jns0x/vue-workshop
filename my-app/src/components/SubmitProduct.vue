<template>
  <div>
    <form @submit.prevent="addNew()">
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
      </div>
      <div class="styled--input">
        <input name="product" v-model="newItems.joke" v-validate="'required|min:3'" placeholder="add product" class="form-input" />
        <button>Add new joke</button>
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
.styled--input {
  display: flex;
  justify-content: center;
}
.styled--input input {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid black;
}
.styled--input button {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid black;
  margin-left: -1px;
}
</style>