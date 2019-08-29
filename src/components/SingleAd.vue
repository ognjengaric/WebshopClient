<template>
  <div class="main-container">
      <div class="image-container">
        <svg width="90%" height="80%">
            <image  v-bind:href="`data:image/svg+xml;base64,${ad.image}`"  width="100%" height="100%"/> 
        </svg>
      </div>
      <div class="info-container">da</div>
  </div>
</template>

<script>
import { baseURL } from '../baseConfig';

export default {
    
    beforeCreate(){
        this.$http.get(`${baseURL}/ad/${this.$route.params.id}`).then((response) => {
            this.ad = response.body;
        })       
    },

    data() {
      return {
          ad : {},
      }
    },

}
</script>

<style scoped>
    .main-container{
        position: absolute;
        height: 75%;
        width: 100%;
        background-color: #f8f8f8;
        display: flex;
        padding: 0px 5%;
    }

    .image-container {
        width: 40%;
        height: 100%;
        align-content: center;
        padding: 10px;
    }

    .info-container{
        width: 100%;
        display: flex;
    }
</style>