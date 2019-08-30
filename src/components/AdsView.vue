<template>
  <main>
      <section>
        <article v-for="ad in favoriteAds" v-bind:key="ad.name">
          <!-- <div class="like-dislike-ratio">+{{ad.numberOfLikes - ad.numberOfDislikes}}</div> -->
          <svg width="90%" height="80%">
            <image class="image-container" @click="displayAd(ad.name)"  v-bind:href="`data:image/svg+xml;base64,${ad.image}`"  width="100%" height="100%"/> 
            <image v-if="roleObject.isBuyer" class="make-favorite" @click="handleFavoriteAction" :href="require(`../assets/${favoriteIcon}`)"  width="15%" height="15%"/> <!-- On click za favorite kad je ulogovan -->
          </svg>
          <div class="price-container">{{ad.price}}$</div>
          <div class="name-container">{{ad.name}}</div>
        </article>
      </section>
      <div class="page-control-container"></div>
  </main>
</template>

<script>

import { baseURL } from '../baseConfig';

export default {
  
  props :{
    roleObject: {
      type: Object
    }
  },
  
  data() {
      return {
          favoriteIcon : "favorite-inactive.svg",
          favoriteAds : []
      }
    },

  methods: {
    handleFavoriteAction(){
      if(this.favoriteIcon === "favorite-inactive.svg"){
        this.favoriteIcon = "favorite-active.svg";
      }                
      else{
        this.favoriteIcon ="favorite-inactive.svg";
      }  
    }, 

    displayAd(adName){
      this.$router.push({name:'ad', params:{id:adName}})
    }
  },

  created() {
    this.$http.get(`${baseURL}/favorite-ads`).then(response => {
      this.favoriteAds = response.body;
    }, () =>{
        // setTimeout(() => {
        // this.$router.go();
        // }, 10000);
    })
  }
}
</script>

<style scoped>

  .make-favorite {
    z-index: 10;
    cursor: pointer;
  }

  .make-favorite:hover {
    border: 1px solid black;   
  }

  .image-container {
    z-index: -1;
    cursor: pointer;
  }

  main {
      width: 100%;
      height: 75vh;
      margin: 10px 5px;
      border-radius: 10px;
  }

  section {
      width: 100%;
      height: 70vh;
      display: flex;
      flex-wrap: wrap;
  }

  .page-control-container {
    height: 5vh;
  }

  article {
    height: 50%;
    width: 18%;
    margin: 0px 5px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid transparent;
    border-radius: 5px;
  }

  article:hover {
    background-color:#f8f8f8;
  }

  svg {
    margin-top: 10px;
  }

  .price-container {
    width: 100%;
    text-align: center;
    border: 1px solid orangered;
    background-color: orangered;
    border-radius: 5px;
    margin: -15px 30% 15px 30%;
    color: white;
  }

  /* .like-dislike-ratio {
    width: 100%;
    text-align: right;
    color: green;
    border-radius: 5px;
    margin: 15px 5px -25% 0;
  } */

  .name-container {
    width: 100%;
    text-align: center;
    margin-top: -10px;
    font-size: 1.1rem
  }

</style>