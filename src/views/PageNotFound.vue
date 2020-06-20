<template>
  <div id="page_not_found">
    <h1>Oops! page not found</h1>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page_not_found {
  height: 80vh;
  display: grid;
  place-content: center;
}
</style>
