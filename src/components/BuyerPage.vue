<template>
  <main>
        <h3>Welcome {{username}}!</h3>
        <div class="lists-container">
            <div class="list-column"></div>
            <div class="list-column"></div>
            <div class="list-column"></div>
        </div> 
  </main>
</template>

<script>
import { baseURL } from '../baseConfig';

export default {
    data(){
        return{
            buyerData: {}, 
            username: "",
        }
    },
    
    beforeCreate(){
        if (!this.$session.exists()) {
            this.$router.push('/');
        }
    },

    created(){
        this.$http.get(`${baseURL}/data/${this.$session.get('accessToken')}`).then(response => {
            this.buyerData = response.body.role;
            this.username = response.body.username;
      }, () => {

      })
    }
}
</script>

<style>
    h3 {
        color: #999; 
        margin-left: 15px;
        padding: 10px;
    }

    .lists-container {
        display: flex;
        margin: 15px;
    }

    .list-column{
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

</style>