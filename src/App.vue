<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view></router-view>
    <div class="main">
      <router-view name="aside"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import navigationBar from './components/NavigationBar';

export default {
  name: 'app',
  components: {
    'navigation-bar': navigationBar
  }
}
</script>

<style>
  
  #app {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .main {
    display: flex;
  }

</style>
