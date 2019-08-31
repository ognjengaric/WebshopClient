<template>
  <nav class="nav">
      <button class="nav-button"><router-link class="nav-link" to="/">Home</router-link></button>
      <button class="nav-button"><router-link class="nav-link" to="/ads">All ads</router-link></button>
      <div class="account-container">
          <button v-if="roleObject.isSeller && !($route.path === '/seller')" class="account-button" @click="displaySellerPage()">Profile page</button>
          <button v-if="roleObject.isSeller" class="account-button">Messages</button>
          <button v-if="roleObject.loggedIn()" @click="logOut" class="account-button">Log out</button>
          <button v-if="!roleObject.loggedIn()" class="account-button">Account</button>
          <div v-if="!roleObject.loggedIn()" class="dropdown-content">
              <router-link class="link" to="/login">Log in</router-link>
              <router-link class="link" to="/register">Register</router-link>
          </div>
      </div>
  </nav>
</template>

<script>

import { baseURL } from '../baseConfig';

export default {

  props : {
    roleObject: {
      type: Object
    }
  },

  data() {
    return {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
  },

  methods: {
    logOut(){
        this.$http.post(`${baseURL}/logout`, this.$session.get('accessToken'), {headers:this.headers}).then(() =>{
        this.$emit('logOut');
        this.$session.destroy();
        this.$router.push('/');
        }, () =>{
            alert('Unsuccessfull logout!');
        })
    },

    displaySellerPage(){
        this.$router.push('/seller');
    }
  }
}
</script>

<style scoped>

    .nav {
        position: relative;
        height: 44px;
        width: 100%;
        border-bottom: 1px solid #e9e9e9;
        background-color: #f8f8f8;
        font-size: 14px;
    }

    .account-container {
        float: right;
        overflow: hidden;
        height: auto;
        
    }

    .account-container:hover .dropdown-content{
        display: flex;
    }

    .account-button {
        color: #999;
        background-color: inherit;
        cursor: pointer; 
        border: none;
        outline: none;
        padding: 14px 16px;
        border-left: 1px solid #e9e9e9;   
    }

    .nav-button {
        color: #999;
        background-color: inherit;
        border: none;
        outline: none;
        cursor: auto;
        padding: 14px 16px;  
    }
    

    .account-button:hover, .nav-button:hover{
        color: orangered;
    }

    .dropdown-content {
        display: none;
        flex-direction: column;
        position: absolute;
        right: 0px;
        background-color: inherit;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 2;
    }

    .dropdown-content .link, .link {
        color: #999;
        background-color: #f8f8f8;
        padding: 12px 16px;
        display: block;
        text-align: left;
        text-decoration: none;
    }   

    .dropdown-content .link:hover{
        color: orangered;
        background-color: #f0f0f0;
        cursor: pointer;
    }

    .nav-link{
        text-decoration: none;
        color: #999;
    }

    .nav-link:hover {
        color: orangered;
        cursor: pointer;
    }


</style>