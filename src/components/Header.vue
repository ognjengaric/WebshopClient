<template>
  <header class="header">
      <div class="center-container">
          <div class="search-container">
              <input class="search-input" type="text" placeholder="Search..."/>
              <button class="main-filter-button" @click="replaceIcon">
                    <svg width="100%" height="100%">
                        <image id="main-filter-image" :href="require(`../assets/${filterIcon}`)"  width="90%" height="90%"/>
                    </svg>
              </button>
          </div>
          <button class="search-button">
              <svg width="100%" height="100%">
                  <image href="../assets/search-button.svg"  width="90%" height="90%"/>
              </svg>
          </button>
      </div> 
  </header>
</template>

<script>    

export default {



    data() {
        return {
            filterIcon : "search-ad.svg"
        }
    },

    methods: {

        replaceIcon(){
            if(this.filterIcon === "search-ad.svg"){
                this.filterIcon = "search-user.svg"
            }                
            else{
                this.filterIcon = "search-ad.svg";
            }                
        }

    }
}
</script>

<style>

    .header  {
        position: relative;
        height: 90px;
        width: 100%;
        z-index: 1;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        justify-content: center;
    }

    .center-container {
        padding-top: 25px;
        width: 50%;
        height: inherit;
        display: flex;
    }

    .search-container {
        position: relative;
        width: 70%;
        overflow: hidden;
        height: 40px;
        border: 1px solid #cbcbcb;
        border-right: 0 none;
        border-radius: 3px 0 0 3px;
        display: flex;  
        align-items: center;
    }

    .search-button {
        width: 7%;
        height: 42px;
        border: 1px solid #cbcbcb;
        border-left: 0 none;
        border-radius: 0 3px 3px 0;
        outline: none;
        cursor: pointer;
        background-color: #f2f2f2;
    }

    .search-input {
        width: 80%;
        height: 30px;
        border: none;
        outline: none;
        padding-left: 10px;
    }

    .main-filter-button {
        width: 7%;
        height: 30px;
        border: none;
        outline: none;
        background-color: inherit;
        margin-left: 50px;
        cursor: pointer;
    }

</style>
