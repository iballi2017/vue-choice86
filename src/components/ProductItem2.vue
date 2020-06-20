<template>
  <div class="card mt-3" id="ProductItem">
    <div class="card-body">
      <router-link v-bind:to="'/products/' + productArray.id">
        <h5 class="card-title" v-rainbow>
          {{ productArray.prod_name }}
        </h5></router-link
      >
      <p class="card-text">{{ productArray.prod_price }}</p>
      <p class="card-text">{{ productArray.prod_description | snippet }}...</p>
    </div>
    <div class="card-footer">
      <router-link v-bind:to="'/products/' + productArray.id"
        ><button class="btn btn-block btn-info">Buy Now</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem2",
  props: {
    productArray: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
