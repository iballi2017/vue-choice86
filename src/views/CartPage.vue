<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div
          class="alert alert-info mt-5"
          role="alert"
          v-if="!cartItems.length"
        >
          Your art is empty!
        </div>
      </div>
    </div>

    <div class="row" v-if="cartItems.length">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col" colspan="2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cartItem, item) in cartItems" :key="item">
              <th scope="row">
                {{ cartItem.productName }}
              </th>
              <td>
                <button
                  class="border-0 btn-sm mr-2"
                  v-on:click="removeQty(cartItem)"
                >
                  Remove</button
                >{{ cartItem.qty
                }}<button
                  class="border-0 btn-sm ml-2"
                  v-on:click="addQty(cartItem)"
                >
                  Add
                </button>
              </td>
              <td>
                <strong>{{ cartItem.qty * cartItem.price }}</strong>
              </td>
              <td>
                <button
                  class="btn-danger btn-sm"
                  v-on:click="removeItem(cartItem)"
                >
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row" colspan="4">
                <strong class="cart_total">Total: {{ cartTotal }}</strong>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-12 col-md-8 offset-2">
        <ul class="list-group mt-5" v-if="cartItems.length">
          <li
            class="list-group-item"
            style="display: flex; justify-content: space-between"
          >
            <div>Product Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Amount</div>
          </li>
          <li
            class="list-group-item"
            v-for="(cartItem, item) in cartItems"
            :key="item"
            style="display: flex; justify-content: space-between"
          >
            <div>{{ cartItem.productName }}</div>
            <div>{{ cartItem.price }}</div>
            <div>
              <button class="border-0 btn-sm" v-on:click="removeQty(cartItem)">
                Remove</button
              ><input
                type="number"
                style="width: 50px"
                v-model="cartItem.qty"
              /><button class="border-0 btn-sm" v-on:click="addQty(cartItem)">
                Add
              </button>
            </div>
            <div>
              {{ cartItem.qty * cartItem.price }}
            </div>
          </li>
          <li class="list-group-item active">
            <strong>Total: {{ cartTotal }}</strong>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CartPage",

  data() {
    return {
      cartTotal: 0,
    };
  },
  methods: {
    removeQty(e) {
      console.log(e.qty);
      if (e.qty > 1) {
        e.qty--;
      } else {
        return;
      }
      this.calc_cart_total();
    },

    addQty(e) {
      console.log(e.qty);
      e.qty++;
      this.calc_cart_total();
    },

    calc_cart_total() {
      console.log("Hello Programmer!!!");
      console.log(this.cartItems);
      this.cartTotal = 0;
      this.cartItems.forEach((element) => {
        console.log(element);
        this.cartTotal += element.price * element.qty;
        console.log(this.cartTotal);
        return this.cartTotal;
      });

      console.log(this.cartTotal);
    },

    removeItem(e) {
      var removeItem = this.cartItems
        .map((data) => {
          return data.id;
        })
        .indexOf(e.id);

      this.cartItems.splice(removeItem, 1);
      this.calc_cart_total();
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },

  created: () => {
    console.log("Hello world");
  },

  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      //   console.log("Hello Programmer!!!");
      //   console.log(this.cartItems);
      //   this.cartTotal = 0;
      //   this.cartItems.forEach((element) => {
      //     console.log(element);
      //     this.cartTotal += element.price * element.qty;
      //   });

      //   console.log(this.cartTotal);

      this.calc_cart_total();
    });
  },
};
</script>
