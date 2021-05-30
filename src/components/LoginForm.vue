<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="login-panel bg-white text-left">
          <div
            class="alert alert-primary mt-3"
            role="alert"
            v-if="isLogin"
          >
            Login successfully. <small>waiting for redirect.</small>
          </div>
           <div
            class="alert alert-danger mt-3"
            role="alert"
            v-if="error"
          >
             Email or Password incorrent
          </div>
          <h1 class="display-5 font-weight-bold">Welcome back </h1>
          <br />
          <form id="form">
            <div class="form-group">
              <lable class="input-label">Email</lable>
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                placeholder="Email"
                
              />
            </div>
            <div class="form-group">
              <lable class="input-label">Password</lable>
              <input
                type="password"
                v-model="user.password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <br />
            <div class="form-group d-flex justify-content-center">
              <button
                class="btn btn-primary w-25"
                id="login"
                @click.prevent="login"
                v-if="!isLoggingIn"
              >
                Login
              </button>
              <button
                class="btn btn-primary w-25"
                disabled
                @click.prevent="login"
                v-if="isLoggingIn"
              >
                <loader-component width="30"></loader-component>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  components: {},

  data() {
    return {
      user :  {
        email: "superadmin@gmail.com",
        password: "123456789",
      },
     
      isLogin: false,
      error : false
      
    };
  },
  methods: {
   async login() {
  /*  console.log(this.$store)
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password,
        }) */
          let config = { 
          'Access-Control-Allow-Origin': '*',
         'x-api-key' : '2BAAFD2BE944AAA5B21BCBDF99F6E',
         'x-api-secret' : 'CA41A12EA2828DBC49CDBDA88D521', 
         'Content-Type': 'application/json'
           };
    await axios({
        method: 'post',
        url: '/login',
        data
        : {
            email: this.user.email,
            password: this.user.password,
            }, 
            headers: config, 
          }).then((response) => {
            console.log("res:",  response.data.accessToken);
            this.isLogin = true
              setTimeout(()=>{
                this.$router.push('/search')
              }, 1000)
          }, (error) => {
            this.error = true
            setTimeout(()=>{
                this.error = false
              }, 1000)
            console.log(error);
          });
      }, 
  },
};
</script>
<style scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-panel #form {
  background-color: #DDD;
  border-radius: 10px;
  padding: 20px;
}
#login {
  background: rgb(71, 214, 166);
  border: none;
  width: 300px !important;
}


</style>