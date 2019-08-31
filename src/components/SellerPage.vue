<template>
  <main>
        <h3>Welcome {{username}}!</h3>
        <div class="like-dislike-container">
            <div class="like-container">
                <svg width="25px" height="25px">
                    <image href="../assets/like.svg"  width="100%" height="100%"/> 
                </svg>
            </div>
            {{sellerData.numberOfLikes}}
            <div class="dislike-container">
                <svg width="25px" height="25px">
                    <image href="../assets/dislike.svg"  width="100%" height="100%"/> 
                </svg>
            </div>
            {{sellerData.numberOfDislikes}}
        </div>
        <div class="lists-container">
            <div class="ad-list-container">
                <select class="ad-status-select" v-model="adStatus" @change="handleStatusChange()">
                    <option>Published</option>
                    <option>Pending</option>
                    <option>Delivered</option>
                </select>
            <ul class="ad-list">
                <li v-for="ad in adsToDisplay" v-bind:key="ad.name" @click="displayAd(ad.name)">{{ad.name}}</li>              
            </ul>
            </div>
            <div class="review-list-container"></div>
        </div>  
  </main>
</template>

<script>
import { baseURL } from '../baseConfig';

export default {

    data(){
        return{
            sellerData: {}, 
            username: "",
            adStatus: "Published",
            adsToDisplay: []
        }
    },

    methods : {
        handleStatusChange(){
            switch(this.adStatus) {
            case "Published":
                this.adsToDisplay = this.sellerData.publishedAds;
            break;
            case "Pending":
                {
                    let pendingAds = [];
                    this.sellerData.deliveredProductAds.forEach(element => {
                        if(element.status === "PENDING"){
                            pendingAds.push(element);
                        }
                    });
                    this.adsToDisplay = pendingAds;
                }
            break;
            case "Delivered": 
                {
                    let deliveredAds = [];
                    this.sellerData.deliveredProductAds.forEach(element => {
                        if(element.status === "DELIVERED"){
                            deliveredAds.push(element);
                        }
                    });
                    this.adsToDisplay = deliveredAds;
                }
            }
        },

        displayAd(adName){
            this.$router.push({name:'ad', params:{id:adName}})
        }
    },

    beforeCreate(){
        if (!this.$session.exists()) {
            this.$router.push('/');
        }
    },

    created(){
    this.$http.get(`${baseURL}/data/${this.$session.get('accessToken')}`).then(response => {
            this.sellerData = response.body.role;
            this.username = response.body.username;
            this.adsToDisplay = response.body.role.publishedAds;
            console.log(this.sellerData);
      }, () =>{

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
    
    .like-dislike-container {
        border-radius: 5px; 
        padding: 5px;
        display: flex;
        align-items: center;
        margin-left: 90%;
    }

    .like-container, .dislike-container {
        margin: 0px 5px;
    }

    .lists-container {
        display: flex;
        margin: 15px;
    }

    .ad-list-container, .review-list-container {
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .ad-status-select {
        width: 33%;
        color: #999;
        background-color: #f8f8f8;
        cursor: pointer; 
        border-style: none;
        padding: 10px 10px;
        border-radius: 3px;
        margin: 10px;
    }

    .ad-list{
        list-style: none;
        margin: 10px;
        padding-left: 0px;
        border: 1px solid #e9e9e9;
        width: 50%;
        height: 50vh;
        overflow-y:auto;
    }

    li {
        border: 1px solid transparent;
        padding: 10px 10px;
        color: #999A;    
        border-radius: 2px;
    }
        
    li:hover{
        border: 1px solid #e9e9e9;
        background-color:#f8f8f8;
        cursor: pointer;
        color: orangered;
    }

</style>