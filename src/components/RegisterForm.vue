<template>
  <div class="main-container">
    <form @submit.prevent="submitInfo">
      <h2 class="heading">Register</h2>
      <div class="input-container">
        <fieldset>
          <legend>Personal info</legend>
          <div class="input-group">
            <input class="input-field" type="text" v-model="user.firstName" placeholder="First name" required/>
            <input class="input-field" type="text" v-model="user.lastName" placeholder="Last name" required/>
          </div>
          <div class="input-group">
            <input class="input-field" type="tel"  v-model="user.telephoneNumber"  pattern="[0-9]+" placeholder="Telephone number" required/>
           <input class="input-field" type="email" v-model="user.email" placeholder="Email" required/>
         </div>
          <div class="input-group">
            <input class="input-field" type="text"  v-model="user.city" placeholder="City" required/>
          </div>
        </fieldset>
        <fieldset>
          <legend>Account info</legend>
          <div class="input-group">
            <input class="input-field" type="text" v-model="user.username" placeholder="Username" required/>
            <input class="input-field" type="password" v-model="user.password" placeholder="Password" required/>
          </div>
        </fieldset>
      </div>
      <button class="submit-button" type="submit">Register</button>
    </form>
  </div>
</template>

<script>

export default {

  data(){
    return {
      user : {
        username : '',
        password : '',
        firstName: '',
        lastName : '',
        telephoneNumber : '',
        email : '',
        city : ''
      },

      headers : {
        'Content-Type' : 'application/json'
      }
    }
  },

  methods: {
    submitInfo(){
      this.$http.post('http://localhost:9090/WebShopREST/register', this.user, {headers:this.headers}).then(() => {
        alert('Successfull register!');
        this.$router.push('/login');
      }, response => {
        if(!response.ok){
          alert('User already exists!');
        }
      })
    }
  }

}
</script>

<style>

.main-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  width: auto;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  padding: 10px 15px 40px 15px;
} 

.heading {
  color: #999; 
}

.input-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
}


.input-field {
  padding: 10px;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  color: #999;
  margin: 5px;
}

.input-field:focus {
    outline: none;
    border-color: orangered;
}

::placeholder {
  color: #999
}

fieldset {
  border: none;
  
}

legend {
  text-align: left;
  font-size: 0.8rem;
  color: #999;
}

.submit-button {
  border: none;
  outline: none;
  width: 75%;  
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