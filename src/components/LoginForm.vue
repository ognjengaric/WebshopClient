<template>
  <div class="main-container">
    <form @submit.prevent="submitInfo">
      <h2 class="heading">Log in</h2>
      <div class="input-container">
        <input class="input-field" type="text" v-model="user.username" placeholder="Username" required/>
        <input class="input-field" type="password" v-model="user.password" placeholder="Password" required/>
      </div>
      <button class="submit-button" type="submit">Log in</button>
    </form> 
  </div>
</template>

<script>

import { baseURL } from '../baseConfig';

export default {

  data() {
    return {
      user : {
        username : '',
        password : ''
      },

      headers : {
        'Content-Type' : 'application/json'
      }
    }
  },
  
  methods: {
    submitInfo(){
      this.$http.post(`${baseURL}/login`, this.user, {headers:this.headers}).then((response) => {
        if(response.ok){
          this.$session.start(); 
          this.$session.set('accessToken', response.bodyText);
          this.$http.headers.common['Authorization'] = 'Bearer ' + response.bodyText;
          this.$router.push('/')
          this.$emit('loggedIn');
        }
      }, response => {
        if(response.status === 400){
          alert('Unsuccessfull login!');
        }
      })
    }
  },

  beforeCreate(){
    if (this.$session.exists()) {
       this.$router.push('/')
    }
  }
}

</script>

<style scoped>

.main-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  width: 15%;
  border: 1px solid #e9e9e9;;
  border-radius: 5px;
  padding: 10px 15px 40px 15px;
}

.heading {
  color: #999; 
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input-field {
  padding: 10px;
  border: 1px solid #e9e9e9;;
  border-radius: 3px;
  margin-bottom: 15px;
  color: #999;
}

::placeholder {
  color: #999
}

.input-field:focus {
    outline: none;
    border-color: orangered;
}


.submit-button {
  border: none;
  outline: none;
  width: 100%;  
  margin-top: 20px;
  padding: 10px;
  color: #999;
  background-color: #f8f8f8;
  cursor: pointer;
  border-radius: 3px;
}


.submit-button:hover {
  color: orangered;
  background-color: #f2f2f2;
}

</style>