<template>
  <div id="Home">
    <h1 class="page_title mt-4 mb-2">Welcome to choice86</h1>

    <section class="container">
      <h3 class="section_title mt-4">Promo Products</h3>
      <div class="row">
        <div class="col">
          <input type="text" placeholder="Search products" v-model="search" />
        </div>
      </div>
      <div class="row">
        <!-- <div
          class="col-12 col-md-4"
          v-for="(product, arr) in promoProducts"
          :key="arr"
        >
          <ProductItem v-bind:productArray="product"></ProductItem>
        </div> -->
        <div
          class="col-12 col-md-4"
          v-for="(product, arr) in filteredProducts"
          :key="arr"
        >
          <ProductItem v-bind:productArray="product"></ProductItem>
        </div>
      </div>

      <div class="">
        <div class="col">
          <button class="btn btn-primary btn-sm" v-on:click="reducePrice">
            Reduce Price
          </button>
          <button
            class="btn btn-secondary btn-sm"
            v-on:click="reducePriceByAmount(10)"
          >
            Reduce Price By 10
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
export default {
  name: "Home",
  components: {
    ProductItem,
  },

  data() {
    return {
      search: "",
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },

    promoProducts() {
      //   var promoProducts = this.$store.state.products.map((product) => {
      //     return {
      //       name: "**" + product.name + "**",
      //       price: product.price / 2,
      //     };
      //   });
      //   return promoProducts;

      return this.$store.getters.promoProducts; //**** Using "getters" to retrive data from store.js */
    },

    // filtering to search for products
    filteredProducts: function() {
      return this.promoProducts.filter((product) => {
        return product.name.match(this.search);
        // return product.name.match("/" + this.search + "/g");
        // console.log(product);
      });
    },
  },

  methods: {
    reducePrice: function() {
      // this.$store.commit("reducePrice"); //###### direct from Mutation

      this.$store.dispatch("reducePrice"); //###### direct from action
    },

    reducePriceByAmount(amount) {
      this.$store.dispatch("reducePriceByAmount", amount); //###### direct from action
    },
  },
};
</script>

<style scope>
.page_title {
  text-align: center;
}
</style>
