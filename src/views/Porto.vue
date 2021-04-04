<template>
    <div class="Portofolio">
    <navPorto />

    <v-btn 
    color="#FFC126"
      rounded 
      class="btn-portofolio mt-10 ml-1"
      to="/porto"
      >Click here to download my CV and Portfolio</v-btn>


    <v-container 
    grid-list-xs
    class="container-porto"
    >
        <v-row
        justify="center"
        >
            <v-col
            cols="9"
            md="9"
            class="container-card-porto"
            >       
            <div class="CardPage1">
                <cardPorto 
                v-for="porto in $store.state.Porto" 
                :key="porto.name" 
                :porto="porto" 
                :class="{ Page1Active : ActivatedPage1 }"
                />
            </div>

               
<!-- Comment Ini kalo ada yang baru  -->

        
            <!-- <div class="CardPage2">
                <cardPorto 
                v-for="porto in $store.state.PortoPage2" 
                :key="porto.name" 
                :porto="porto" 
                :class="{ Page2Active : ActivatedPage2 }"
                />       
            </div> -->
            
            </v-col>
            


<!-- comment ini kalo udah ada design -->

<!--   @click="ActivatedPage2 = true , ActivatedPage1 = false" -->

<!-- lalalalla -->

        </v-row>
    </v-container>
        <div class="arrow__container">
            <v-btn 
            color="#fff" 
            flat 
            icon 
            class="btn-back" >
                <v-icon
                color="#fff"
                class="btn-left"
                @click="ActivatedPage2 = false , ActivatedPage1 = true"
                
                >mdi-arrow-left
            </v-icon>
            </v-btn>

            <v-btn 
            color="#fff" 
            flat 
            icon 
          
            class="btn-right" >
                <v-icon
                color="#fff"
                class="mr-2"
                >mdi-arrow-right
            </v-icon>
            </v-btn>
        </div>

    </div>
</template>
<script>
    import navPorto from '../components/NavPorto.vue'
    import cardPorto from '../components/CardPorto.vue'
    export default {
    components:{
        navPorto,
           cardPorto
        },
        data() {
            return {
                ActivatedPage1:true,
                ActivatedPage2:false
            }
        },
    }
</script>
<style scoped>

    .Portofolio{
    background: url('../assets/Portofolio.png') center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    /* Set up proportionate scaling */
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    }

   
    .container-card-porto{
        margin-top: 150px;
        display: flex;
        flex-direction: row;
        align-content: center;
        transition: all 0.5s ease;
    }

    .CardPage1 , .CardPage2{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 130px;
        transition: all 0.1s ease-in-out;
      
    }

    .CardPage1{
     transform: translateX(-9999px);
    }

    .CardPage1 .Page1Active{
        transform: translateX(9999px);
    }

    .CardPage2{
        position: absolute;
        transform: translateX(9999px);
    }


    .CardPage2 .Page2Active{
        transform: translateX(-9999px);
    }

   
    
    .arrow__container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        left: 52%;
        transform: translate(-50%, -50%);
    }

    .btn-right:hover{
    transform: translateX(6px);
    }

    .btn-right{
        margin-right: 220px;
      
    }
    .arrow__container .btn-back{
        margin-left: 220px;
       
    }
    
    .btn-portofolio{
    text-transform: none;
    font-weight: bolder !important;
    font-size: 15px;
    color: #000000 !important;
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 0;
    width: 355px;
    }

    .btn-portofolio:hover{
    transform: scale(1.1);
    }
  
  @media only screen and (max-width:1440px){
        .CardPage1 , .CardPage2{
      margin-left: 0px;
    }
    .btn-right{
       margin-top:80px;
       right: 30px;
      
    }
    .arrow__container .btn-back{
      margin-top:80px;
      left: 170px;
    }
    }

      
    @media only screen and (max-width:1280px){
        .CardPage1 , .CardPage2{
      margin-left: 0px;
    }
    .btn-right{
       margin-top:10px;
       right:-5px;
      
    }
    .arrow__container .btn-back{
      margin-top:10px;
        left: 120px;
       
    }
    }



</style>