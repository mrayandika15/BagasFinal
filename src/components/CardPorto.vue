<template>

    <div class="ContainerInsideCard">
        <v-card
        class="portofolio-card"
        dark
        color="#000"
        :to="porto.link"
        >
        <v-img
        height="100%"
        width="100%"    
        :src="porto.image"
         ></v-img>
        </v-card>
        <div class="desc-card">
        {{ porto.name }}
        </div>
    </div>

    
      
  
</template>
<script>
export default {
    props: {
            porto: Object,
           
        },
    
}
</script>
<style>



    .ContainerInsideCard{
        display: flex;
        flex-direction: column;
        margin: 35px 65px;
        transition: all 0.5s ease;
    }

    

      .portofolio-card{
        align-self: center;
        width: 250px;
        height: 252px;
        border: 1px solid #fff !important;
        border-radius: 20px !important;
        -webkit-box-shadow: -1px 3px 12px -2px rgba(255,255,255,1);
        -moz-box-shadow: -1px 3px 12px -2px rgba(255,255,255,1);
        box-shadow: -1px 3px 12px -2px rgba(255,255,255,1) !important;
        cursor: pointer;
        transition: all 0.5s ease;
       
    }

    .portofolio-card:hover{
        transform: scale(1.1);
    }

    .desc-card{
        width: 114px;
        height: 30px;
        background-color:#FFC126 ;
        border-radius:20px ;
        color:  #000;
        display: flex;
        justify-content: center;
        align-self: center;
        font-size: 18px ;
        font-weight: bold;
        margin-top: 25px;
    }

    @media only screen and (max-width:1440px){
        .portofolio-card{
        width: 156px;
        height: 154px;
    }



    }


</style>