<template>
  <div id="product_page">
    <h1 class="text-center mt-4 mb-2">Product Page</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>All Products</h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-md-4"
          v-for="(product, item) in productArray"
          :key="item"
        >
          <ProductItem v-bind:productArray="product"></ProductItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem2.vue";
export default {
  name: "ProductItem2",

  data() {
    return {
      productArray: [],
    };
  },
  components: {
    ProductItem,
  },
  props: {
    msg: String,
  },

  computed: {
    // products() {
    //   return this.$store.state.products;
    // },
  },

  created() {
    this.$http
      .get("https://v-products.firebaseio.com/products.json")
      .then((data) => {
        return data.json();
      })
      .then(
        (data) => {
          // console.log(data);
          let productsArray = [];
          for (let key in data) {
            // console.log(data[key]);
            data[key].id = key;
            // console.log(data[key]);
            productsArray.push(data[key]);
          }

          console.log(productsArray);
          this.productArray = productsArray;
        },
        (err) => {
          console.log("Err", err);
        }
      )
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
