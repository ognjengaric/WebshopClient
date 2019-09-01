<template>
  <div class="main-container">
      <div class="image-container">
        <svg width="100%" height="100%">
            <image v-bind:href="`${ad.image}`"  width="100%" height="100%"/> 
        </svg>
      </div>
      <div class="info-container">
                <div class="like-dislike-container">
                    <div class="like-container">
                        <svg width="25px" height="25px">
                            <image href="../assets/like.svg"  width="100%" height="100%"/> 
                        </svg>
                    </div>
                    {{ad.numberOfLikes}}
                    <div class="dislike-container">
                        <svg width="25px" height="25px">
                            <image href="../assets/dislike.svg"  width="100%" height="100%"/> 
                        </svg>
                    </div>
                     {{ad.numberOfDislikes}}
                </div>       
                <div class="title-container">{{ad.name}}</div>
          <div class="description-container">{{ad.description}}</div>
          <div class="columns">
                <div class="city-container">
                    <fieldset>
                        <legend>City</legend>
                        {{ad.city}}
                    </fieldset>
                    <fieldset>
                        <legend>Posted on</legend>
                        {{ad.postingDate}}
                    </fieldset>
                    <fieldset>
                        <legend>Expires on</legend>
                        {{ad.expirationDate}}
                    </fieldset>
                </div>
                <div class="price-container">
                    <fieldset>
                        <legend>Price</legend>
                        US ${{ad.price}}
                    </fieldset>
                </div>
            </div>
      </div>
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
        color: #999; 
    }

    .image-container {
        width: 40%;
        height: auto;
        align-content: center;
        padding: 10px;
        margin: 5% 0;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
    }

    .info-container{
        width: 100%;
        margin: 2.5% 0 5% 10px;
        display: flex;
        flex-direction: column;
        padding: 15px 15px 15px 50px;
    }
    
    .title-container{
        font-size: 1.5rem;
        width: 75%;

    }

    .like-dislike-container {
        border-radius: 5px; 
        padding: 5px;
        display: flex;
        align-items: center;
        margin-left: 75%;
    }

    .like-container, .dislike-container {
        margin: 0px 5px;
    }

    .description-container{
        font-size: 1.1rem;
        font-style: italic;
        word-wrap: break-word;
        margin: 5px 0 15px 0;
    }

    .columns {
        display: flex;
        margin: 15px 0;
    }

    .top {
        margin-bottom: 7.5px;
        padding: 5px 0;
    }

    .price-container {
        width: 50%;
        padding: 10px;
        font-size: 2.5rem;
        color: orangered;
    }
    
    .city-container {
        width: 50%;
        font-size: 1.4rem;
    }
    
    fieldset {
        border: none;  
    }

    legend {
        text-align: left;
        font-size: 0.9rem;
        color: #999;
    }

</style>