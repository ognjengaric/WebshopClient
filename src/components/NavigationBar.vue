<template>
  <nav class="nav">
      <button class="home-button"><router-link class="home-link" to="/">Home</router-link></button>
      <div class="account-container">
          <button class="account-button">Account</button>
          <div class="dropdown-content">
              <router-link class="link" to="/login">Log in</router-link>
              <router-link class="link" to="/register">Register</router-link>
          </div>
      </div>
  </nav>
</template>

<script>

export default {


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
        border-left: 1px solid #e9e9e9; 
        
    }

    .account-container:hover .dropdown-content{
        display: flex;
    }

    .account-button, .home-button {
        color: #999;
        background-color: inherit;
        cursor: pointer; 
        border: none;
        outline: none;
        padding: 14px 16px;  
    }

    .account-button:hover, .home-button:hover{
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

    .home-link{
        text-decoration: none;
        color: #999;
    }

    .home-link:hover {
        color: orangered;
        cursor: pointer;
    }


</style>