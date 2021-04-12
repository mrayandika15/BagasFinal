<template>
    <div class="Portofolio">
    <navPorto />

    <v-container fluid>
        <v-row>
            <v-col
            cols="10"
            offset-lg="1"
            >
                <v-carousel 
                hide-delimiters
                prev-icon="mdi-arrow-left"
                next-icon="mdi-arrow-right"
                height="100%"
                class="CarouselPortoContainer"
                >
                <v-carousel-item
                width="100%"
                
                >
                    <div class="cardContainer">
                        <cardPorto 
                        v-for="porto in $store.state.Porto" 
                        :key="porto.name" 
                        :porto="porto" 
                        />
                    </div>
                </v-carousel-item>
                </v-carousel>        
            </v-col>
        </v-row>
        <v-row>
            <v-col
            align="center"
            >
            <v-btn 
            color="#FFC126"
              rounded 
              class="btn-portofolio mt-10 ml-1"
              @click="GdriveLink()"
              
              >Click here to download my CV and Portfolio</v-btn>
        
            </v-col>
        </v-row>
    </v-container>



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
    methods: {
        GdriveLink:function(){
            window.open("https://drive.google.com/file/d/1p7F4g0FJAuFgv9cUy9T6ayOGzYm3asaD/view?usp=sharing")
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

    .cardContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }
   
    .CarouselPortoContainer{
        margin-top: 110px;
    }
 
    .btn-portofolio{
    text-transform: none;
    font-weight: bolder !important;
    font-size: 15px;
    color: #000000 !important;
    position: relative;
    bottom: 25px;
    }

    .btn-portofolio:hover{
    transform: translateY(6px);
    }

@media only screen and (max-height:767px) {
    .btn-portofolio{
    bottom: 80px;
    }
}

</style>