

// vue.config.js
module.exports = {
    // options...
    /* devServer: {
         proxy: 'http://backend.test/',
     } */

    devServer: {
        // proxy: 'http://jsonplaceholder.typicode.com/posts',
        // proxy: 'https://my-firebase-proj-112d2.firebaseio.com/posts.json',
        // proxy: 'https://jsonplaceholder.typicode.com/posts/',
        // proxy: 'https://my-firebase-proj-112d2.firebaseio.com/',
        proxy: "https://v-products.firebaseio.com/",
        proxy: "https://v-products.firebaseio.com/products/"
    }

}


/*
##### NOTE:

This file was created to override CORS errors that occurs when trying to
post data to the backend server via "http://jsonplaceholder.typicode.com/posts"


Source: "https://medium.com/js-dojo/how-to-deal-with-cors-error-on-vue-cli-3-d78c024ce8d3"

*/