<template>
  <div id="addProduct">
    <h1 class="text-center my-5">Add a Product</h1>

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="alert alert-success" role="alert" v-if="submitted">
            Your product has been submitted
          </div>
          <div id="preview" v-if="submitted">
            <p><strong>Product Name: </strong>{{ product.prod_name }}</p>
            <p><strong>Product Price: </strong>{{ product.prod_price }}</p>
            <p>
              <strong>Product Description: </strong>
            </p>
            <p><strong>Seller: </strong> {{ product.prod_price }}</p>
            <p>{{ product.prod_description }}</p>
          </div>
        </div>
      </div>
      <div class="row" v-if="!submitted">
        <div class="col">
          <form action="">
            <label for="product_name">Product Name</label>
            <input
              type="text"
              id="product_Name"
              v-model.lazy="product.prod_name"
              required
            />
            <label for="product_price">Product Price</label>
            <input
              type="number"
              id="product_price"
              v-model.lazy="product.prod_price"
              required
            />
            <label for="product_description">Product Description</label>
            <!-- <textarea
              id="product_description"
              v-model.lazy="product.prod_description"
              required
            ></textarea> -->
            <ckeditor
              :editor="editor"
              v-model="editorData"
              v-html="editorData"
              :config="editorConfig"
              v-model.lazy="product.prod_description"
              tag-name="textarea"
            ></ckeditor>

            <div id="categories">
              <input
                type="checkbox"
                name="product.category"
                value="Electronics"
                id="electronic"
                v-model="product.categories"
              />
              <label for="electronic">Electronics</label>

              <input
                type="checkbox"
                name="product.category"
                value="Stationeries"
                id="stationeries"
                v-model="product.categories"
              />
              <label for="stationeries">Stationeries</label>

              <input
                type="checkbox"
                name="product.category"
                value="Clothings"
                id="clothings"
                v-model="product.categories"
              />
              <label for="clothings">Clothings</label>

              <input
                type="checkbox"
                name="product.category"
                value="Automobile"
                id="automobile"
                v-model="product.categories"
              />
              <label for="automobile">Automobile</label>
            </div>

            <label for="product_seller">Seller</label>
            <select
              name="seller"
              id="product_seller"
              v-model="product.prod_seller"
            >
              <option
                v-for="(seller, prod_cat) in prod_sellers"
                :key="prod_cat"
                >{{ seller }}</option
              >
            </select>

            <button
              class="btn-primary mt-3 border-none shadow btn-block btn-lg"
              v-on:click.prevent="post_product"
            >
              Submit Product
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ckeditor for textarea
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
export default {
  name: "AddProduct",
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      product: {
        prod_name: "",
        prod_price: null,
        prod_description: "",
        prod_seller: "",
        categories: [],
      },
      prod_sellers: [
        "Ibrahim Alli",
        "Lota Chukwu",
        "Bimbola Richards",
        "Angular People",
      ],
      submitted: false,
      editor: ClassicEditor,
      editorData: "<p>Type in your content body here</p>",
      editorConfig: {
        // The configuration of the editor.
        // toolbar: ["bold", "italic", "|", "link"],
      },
    };
  },

  methods: {
    post_product: function() {
      console.log("POST PRODUCT");
      //   this.$http
      //     .post("https://jsonplaceholder.typicode.com/posts", {
      //       id: Date.now(),
      //       title: this.product.prod_name,
      //       content: this.product.prod_price,
      //     })
      //     .then((response) => {
      //       console.log(response);
      //       this.submitted = true;
      //     });
      this.$http
        .post(
          "https://v-products.firebaseio.com/products.json",
          //  {
          //   id: Date.now(),
          //   title: this.product.prod_name,
          //   content: this.product.prod_price,
          // }
          this.product
        )
        .then((response) => {
          console.log(response);
          this.submitted = true;
        });
    },
  },

  created() {
    // this.$http
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((users) => {
    //     console.log(users);
    //   });
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}

#addProduct * {
  box-sizing: border-box;
}

#addProduct {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
input[type="number"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
#categories {
  margin-top: 20px;
}
#categories label {
  display: inline-block;
  margin-right: 2em;
}
#categories input {
  display: inline-block;
  margin-right: 10px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
</style>
