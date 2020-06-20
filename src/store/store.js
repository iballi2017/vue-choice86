import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        // const online_products,

        products: [
            {
                id: 1,
                name: "ASDrVG",
                price: 20,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam autem eius, dolorum recusandae laudantium voluptates reiciendis repellat. Praesentium id eum pariatur similique error harum ducimus cum reprehenderit distinctio, provident quaerat hic dolores, at porro nihil odit suscipit accusantium voluptates facere fugit alias eaque! Optio dolores ratione sed rem voluptate."
            },
            {
                id: 2,
                name: "OJHGB",
                price: 50,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam autem eius, dolorum recusandae laudantium voluptates reiciendis repellat. Praesentium id eum pariatur similique error harum ducimus cum reprehenderit distinctio, provident quaerat hic dolores, at porro nihil odit suscipit accusantium voluptates facere fugit alias eaque! Optio dolores ratione sed rem voluptate."
            },
            {
                id: 3,
                name: "RTNHY",
                price: 30,
                description: "Praesentium id eum pariatur similique error harum ducimus cum reprehenderit distinctio, provident quaerat hic dolores, at porro nihil odit suscipit accusantium voluptates facere fugit alias eaque! Optio dolores ratione sed rem voluptate"
            },
            {
                id: 4,
                name: "PJU^&&",
                price: 60,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat rem assumenda! Iure saepe nemo fugiat aque, aperiam nostrum officiis quis libero voluptatum id, excepturi tempore odio fuga! Inventore, voluptate."
            },
            {
                id: 5,
                name: "RVFGJ^&",
                price: 70,
                description: "voluptatum id, excepturi tempore odio fuga! Inventore, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat rem assumenda! Iure saepe nemo fugiat aque, aperiam nostrum officiis quis libero voluptatum id,"
            },
            {
                id: 6,
                name: "POLKJH987",
                price: 30,
                description: " Optio dolores ratione sed rem id, excepturi tempore odio fuga! Inventore, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat rem assumenda! Iure saepe nemo fugiat aque, aperiam nostrum officiis quis libero voluptatum id,"
            }
        ],


        cartItems: [
        ],
    },


    // ***** Getters
    getters: {
        promoProducts: state => {
            var promoProducts = state.products.map((product) => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2,
                    description: product.description
                };
            });

            return promoProducts;
        },
    },


    // ***** Mutations
    mutations: {
        //without parameter
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1
            })
        },

        //with parameter
        reducePriceByAmount: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload
            })
        }
    },
    actions: {
        //without parameter
        reducePrice: context => {
            context.commit('reducePrice')
        },

        //with parameter
        reducePriceByAmount: (context, payload) => {
            context.commit('reducePriceByAmount', payload)
        }
    }
})