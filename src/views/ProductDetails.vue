<template>
  <div class="productDetails container">
    <h4>Product Details</h4>

    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="card mt-5" v-if="product.prod_name">
          <div class="card-body">
            <h3 class="card-title">{{ product.prod_name }}</h3>
            <h5>{{ product.prod_price }}</h5>
            <p><strong>Description:</strong> {{ product.prod_description }}</p>
            <p><strong>Seller:</strong> {{ product.prod_seller }}</p>
            <p v-if="product.categories">
              <ul>
                <!-- <strong>Categor<span v-if="product.categories.length = 1 ">y</span><span v-if="product.prod_categories.length != 1">(ies)</span>:</strong>  -->
            <li class="product_category py-1 px-2 mr-2 mb-2" v-for="(category, cat) in product.categories" :key="cat">{{ category }}</li></ul>
            </p>

            <button class="btn btn-warning btn-lg btn-block text-white" v-on:click="handleAddToCart">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      cartItems:[],

      // item:{
      //   productName: this.product.prod_name,
      //   price: this.product.prod_price,
      //   qty: 1,
      // }

    };
  },

  created() {
    this.$http
      .get("https://v-products.firebaseio.com/products/" + this.id + ".json")
      .then((data) => {
        // console.log(data.json());
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.product = data;
        this.product.id = this.id

        return this.product
      });

     this.cartItems =this.$store.state.cartItems

     console.log(this.id)
  },

  methods:{
    
    handleAddToCart(){
      console.log(this.product.prod_description)
      console.log(this.product.prod_name)
      console.log(this.product.prod_price)

      console.log(this.product.id)

      let productItem_exist = false

      for(let i in this.cartItems){
        console.log(this.cartItems[i].id)

        if(this.cartItems[i].id === this.id){
          this.cartItems[i].qty++
          productItem_exist = true
          break
        }
      }

        if(!productItem_exist){
          this.cartItems.push({
            id: this.id,
            productName: this.product.prod_name,
            price: this.product.prod_price,
            qty: 1
          })
        }
  }},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product_category{
  list-style: none;
  border-radius: 50px;
  background-color: #ccc;
  display: inline-block;
}
</style>
