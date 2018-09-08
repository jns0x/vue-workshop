import axios from "axios";

const store = {
  //3/ It holds a state itself
  state: {
    products: []
  },
  //6/ And methods to update
  async fetchProducts() {
    this.state.products = await axios
      .get("http://api.icndb.com/jokes/random/10")
      // .then(res => console.log(res.data))
      .then(res => res.data);
  },
  addProduct(product) {
    this.state.products.value.push(product);
  }
};

export default store;
