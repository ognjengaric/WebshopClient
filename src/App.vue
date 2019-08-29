<template>
  <div id="app">
    <navigation-bar v-bind:roleObject="roleObject" v-on:logOut="logOut"></navigation-bar>
    <router-view v-on:loggedIn="getUserInfo"></router-view>
    <div class="main">
      <router-view name="aside"></router-view>
      <router-view name="main" v-bind:roleObject="roleObject"></router-view>
    </div>
  </div>
</template>

<script>
import navigationBar from './components/NavigationBar';
import { baseURL } from './baseConfig';


export default {
  name: 'app',
  components: {
    'navigation-bar': navigationBar
  },

  data(){
    return{
      roleObject: {
        isBuyer : false,
        isSeller : false,
        isAdmin : false,

        loggedIn : function() {
          return this.isBuyer || this.isSeller || this.isAdmin;
        },
      },

   //   user: {}
    }
  },

  created(){
    if (this.$session.exists()) {
      this.getUserInfo();
    }
  },

  methods: {
    getUserInfo() {

        this.$http.get(`${baseURL}/data/${this.$session.get('accessToken')}`).then(response => {
      
          const role = response.body.role.name;

          if(role === 'Buyer'){
            this.roleObject.isBuyer = true;
          }
          if(role  === 'Seller'){
            this.roleObject.isSeller = true;
          }
          if(role === 'Administrator'){
            this.roleObject.isAdmin = true;
          }

      //    this.user = response.body;

        }, () =>{
            // setTimeout(() => {
            //     this.$router.go();
            // }, 10000);
        })
    },

    logOut(){
      Object.assign(this.$data, this.$options.data.apply(this));  //reset all data property values
      this.$forceUpdate();
    }
  }

}
</script>

<style>
  
  #app {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .main {
    display: flex;
  }

</style>
