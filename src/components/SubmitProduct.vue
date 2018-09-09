<template>
  <div class="from--wrapper">
    <form @submit.prevent="addNew()">
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
      </div>
      <div class="styled--input">
        <input name="product" v-model="newItems.joke" v-validate="'required|min:3'" placeholder="add product" class="form-input" />
        <button class="btn btn--add--joke">Add new joke</button>

      </div>
    </form>
    <button v-on:click="refreshData()" class="btn">Get more jokes</button>
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
    },
    refreshData() {
      this.$store.dispatch("getProducts");
    }
  }
};
</script>

<style scoped>
.styled--input {
  display: flex;
}
.styled--input input {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid black;
}
.btn {
  border: 1px solid black;
  border-radius: 5px;
}
.styled--input .btn.btn--add--joke {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -1px;
}
.from--wrapper {
  display: flex;
  justify-content: center;
}
</style>