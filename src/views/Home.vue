<template >
  <div class="Home d-flex">
   <navMenu ></navMenu>
    
  <v-container grid-list-xs fluid>
    <v-row >
      <v-col
      cols="6"
      sm="6"
      md="6"
      >
        <TypographHome />
      </v-col>
      <v-col
      cols="6"
      sm="6"
      md="6"
      
      >

      <div class="vcardContainer ml-16 mt-3 mt-n6">

        <v-card 
        elevation="0" 
        :to="$store.state.writing"
        class="card-porto 
        card-writing" 
        width="350px" 
        height="501px" 
        color="transparent"
        v-bind:class="{
        WritingCard : ActiveWriting , 
        WritingDisabled : DisabledWriting
        }">
          <h4 class="white--text">Writings.</h4>
        </v-card>
  
        <v-card
        elevation="0" 
        class="card-porto card-design" 
        width="350px" 
        @click="LinkDesign()"
        height="501px" 
        color="transparent"
          v-bind:class="{
          DesignCard : ActiveDesign ,
          DesignDisabled : DisabledDesign
          }">
          <h4 class="white--text">Design</h4>
        </v-card>
      </div>

      </v-col>
    </v-row>

    <v-row>
      <v-col
      cols="12"
      sm="12"
      md="12"
      >

      <div class="button__container mt-9 ml-16 ">

        <v-btn 
        fab 
        x-small 
        class="ArrowButtonLeft" 
        color="#fff" 
        outlined 
        v-bind:class="{activeLeft : LeftActive}"
        @click="
        RightActive = true , 
        LeftActive = false , 
        ActiveDesign = false , 
        ActiveWriting = true ,DisabledWriting = false , DisabledDesign = true ">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
  
        <v-btn
         fab 
         x-small 
         color="#fff" class="ArrowButtonRight" 
         outlined v-bind:class="{
           activeRight : RightActive}"
         @click="
         RightActive = false , 
         LeftActive = true , 
         ActiveDesign = true , 
         ActiveWriting = false , DisabledWriting = true , DisabledDesign = false">
          <v-icon>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </div>
      </v-col>
    </v-row>
  </v-container>

   

    
      

  


  </div>
</template>
<script>
  import TypographHome from '../components/Typograph.vue'
  import navMenu from '../components/Navmenu.vue'
  
  export default {
    name: 'Home',
    components: {
      TypographHome,
      navMenu
      
    },
    data() {
      return {
        RightActive: true,
        LeftActive: false,
        ActiveWriting: true,
        ActiveDesign: false,
        DisabledWriting: false,
        DisabledDesign: true


      }
    },
    methods: {
      LinkDesign:function(){
        window.open("http://www.instagtam.com/the.2000j")
      }
    },
  }
</script>
<style scoped>
  .Home {
    background: url('../assets/BNW\ 5\ 1.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    min-height: 100%;
    /* Set up proportionate scaling */
    width: 100%;
    height: 100%;
    overflow: hidden;
   
  }




  .card-porto {
    border-radius: 30px !important;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    margin-top: 180px;

  }

  .card-porto h4 {
    margin-bottom: 24px;
  }

  .card-writing {

    background-image: url('../assets/bnw\ 6\ 1.png');
    background-size: 100% 100%;
    transition: all 0.5s ease;
    z-index: 3;
  }

  .card-writing.WritingCard {
    margin-left: 0;
    transform: scale(1);
    animation: ActiveCardAnimation 0.5s ease;

  }

  .card-porto.WritingCard:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .card-writing.WritingDisabled {
    margin-left: 240px;
    transform: scale(0.8);
    z-index: 1;
    animation: cardDisabledAnimation 0.5s ease;
  }

  @keyframes cardDisabledAnimation {
    0% {
      margin-left: 0;
      z-index: 3;
      transform: scale(1);
    }

    50% {
      margin-left: 340px;
      z-index: 3;
      transform: scale(1);
    }

    100% {
      margin-left: 240px;
      z-index: 2;
      transform: scale(0.8);
    }
  }

  .card-design {
    margin-left: 240px;
    background-image: url('../assets/BNW\ 7\ 1.png');
    background-size: 100% 100%;
    transition: all 0.5s ease;
    transform: scale(0.8);
    z-index: 2;

  }

  .card-design.DesignDisabled {
    margin-left: 240px;
    transform: scale(0.8);
    z-index: 1;
    animation: cardDisabledAnimation 0.5s ease;
  }

  .card-porto.DesignCard:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .card-design.DesignCard {
    margin-left: 0;
    transform: scale(1);
    animation: ActiveCardAnimation 0.5s ease;

  }

  @keyframes ActiveCardAnimation {
    0% {
      margin-left: 240px;
      z-index: 2;
      transform: scale(0.8);
    }

    50% {
      margin-left: 0;
      transform: scale(0.8);
      z-index: 2;
    }

    100% {
      margin-left: 0;
      transform: scale(1);
      z-index: 3;
    }
  }

  .button__container {
    display: flex;
    align-self: flex-end;
    justify-content: center;
    width: 100%;
    position: absolute;
    margin-left: 115px !important;



  }

  .ArrowButtonRight {
    margin: 0 5px;
    transition: all 0.5 ease;
    cursor: default !important;
  }



  .ArrowButtonLeft {
    margin: 0 5px;
    transition: all 0.5 ease;
    cursor: default !important;
  }

  .ArrowButtonRight.activeRight {
    background-color: #FFC126 !important;
    color: #010101 !important;
    border: none !important;
    cursor: pointer !important;
  }


  .ArrowButtonLeft.activeLeft {
    background-color: #FFC126 !important;
    color: #010101 !important;
    border: none !important;
    cursor: pointer !important;
  }
  
  
</style>