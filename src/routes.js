import Home from "./views/Home.vue"
import PageNotFound from "./views/PageNotFound.vue"
import ProductPage from "./views/ProductPage.vue"
import ProductDetails from "./views/ProductDetails.vue"

import AddProduct from "./views/AddProduct.vue"
import CartPage from "./views/CartPage.vue"

export default [
    { path: "/", component: Home },
    { path: "", pathMatch: 'full', redirectTo: "Home" },
    { path: "/ProductPage", component: ProductPage },
    { path: "/products/:id", component: ProductDetails },
    { path: "/add_product", component: AddProduct },
    { path: "/CartPage", component: CartPage },
    { path: "**", component: PageNotFound }
]