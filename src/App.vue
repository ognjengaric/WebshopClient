<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view></router-view>
    <router-view name="aside"></router-view>
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

</style>
