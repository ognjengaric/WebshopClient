<template>
  <aside class="list-container">
      <h4 class="list-header">CATEGORIES</h4>
      <ul class="category-list">
          <li class="list-item" v-for="category in categories" v-bind:key="category.id">{{category.name}}</li>
      </ul>
  </aside>
</template>

<script>
import { baseURL } from '../baseConfig';

export default {
    data() {
        return {
            categories : []
        }
    },

    created() {
        this.$http.get(`${baseURL}/categories`).then(response => {
            this.categories = response.body;
        }, () =>{
            // setTimeout(() => {
            //     this.$router.go();
            // }, 10000);
        })
    }

}
</script>

<style>
    
    .list-container {
        width: 15%;
        height: 65vh;
        margin: 10px 0px;
        position: sticky;
        border: 1px solid #e9e9e9;
        border-radius: 10px;
        top: 0;
    }

    .category-list {
        list-style: none;
        margin: 0px 10px 0px 10px;
        padding-left: 0px;
    }


    .list-header {
        padding: 10px 10px;
        margin: 10px 10px 0px 10px; 
        border-radius: 2px;
        color: #999;    
    }

    .list-item {
        border: 1px solid transparent;
        padding: 10px 10px;
        color: #999A;    
        border-radius: 2px;
    }

    .list-item:hover{
        border: 1px solid #e9e9e9;
        background-color:#f8f8f8;
        cursor: pointer;
        color: orangered;
    }
</style>