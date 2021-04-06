<template>
  <v-app>
    
    <transition name="router">
      <router-view></router-view>
    </transition>
    
  </v-app>
</template>

<script>

  export default {
    name: 'App',

    components: {
     
    },

    data: () => ({
      //
    }),
  };
</script>

<style>
  html , body {
    overflow: hidden;
    height: 100%;
  }
  #app{
    background-color: black !important;
    background: black !important;
  }
  .router-enter-active , .router-leave-active{
    transition: all 0.5s ease-in-out;
  }

  .router-enter-active{
    transition-delay: 0.5s;
  }

  .router-enter {
    transform: translateY(100px);
    opacity: 0;

  }
  .router-enter-to {
   transform: translateY(0px);
   opacity: 1;
  }

  .router-leave{
    opacity: 1;
    transform: translateX(0px);
  }

  .router-leave-to{
    opacity: 0;
    transform: translateX(100px);
  }
</style>
