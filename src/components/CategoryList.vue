<template>
  <aside class="list-container">
      <h4 class="list-header">CATEGORIES</h4>
      <ul class="category-list">
          <li class="list-item">Item</li>
          <li class="list-item">Item</li>
          <li class="list-item">Item</li>
          <li class="list-item">Item</li>
          <li class="list-item">Item</li>
      </ul>
  </aside>
</template>

<script>

export default {

    // created() {
    //     this.$http.get('http://localhost:9090/WebShopREST/test').then(data => {
    //         console.log(data);
    //     })
    // }

}
</script>

<style>
    
    .list-container {
        width: 20%;
        height: 70vh;
        margin: 10px 0px;
        position: sticky;
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
        border: 1px solid #e9e9e9;
        background-color: #f2f2f2;
        color: #999;    
        border-radius: 2px;
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