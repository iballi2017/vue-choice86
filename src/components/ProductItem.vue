<template>
  <div class="card mt-3" id="ProductItem">
    <div class="card-body">
      <h5 class="card-title" v-rainbow>
        {{ productArray.name }}
      </h5>
      <p class="card-text">{{ productArray.price }}</p>
      <p class="card-text">{{ productArray.description | snippet }}...</p>
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
  name: "ProductItem",
  props: {
    productArray: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
