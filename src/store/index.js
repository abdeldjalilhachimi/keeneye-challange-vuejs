/* eslint-disable */
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {}
  },
  mutations: {},
  actions: {
    loginUser({}, user) {
      let config = {
        "Access-Control-Allow-Origin": "*",
        "x-api-key": "2BAAFD2BE944AAA5B21BCBDF99F6E",
        "x-api-secret": "CA41A12EA2828DBC49CDBDA88D521",
        "Content-Type": "application/json",
      };
      axios
        .post(
          "login",
          config, 
       {
        data: {
          email: user.email,
          password: user.password,
        },
       
       }
        
        )
        .then((respons) => {
          this.$router.push("/search");
          console.log(respons.data);
        });
    },
  },
  modules: {},
});
