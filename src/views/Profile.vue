<template >
    <div class="Profile">
        <profileNav />

   

        <v-container 
        fluid
        class="Profile_text" 
        >
            <v-row
    
            >
                <v-col
                cols="6"
                no-gutters
         
                >

                <div class="background-img"></div>

                <h4 class="text-up">Hello,i am Bagas</h4>
                <div class="big-text">
                    <h1>I’M AN</h1> 
                    <h1 class="colored--text">ADVERTISING</h1>
                   
                </div> 
                <h1 class="text-designer">DESIGNER</h1>
                <p>Are you looking for creative advertising designer?  Well, you found it. I can do many advertising  projects such as Brand Identity, Brand Communication, Copywriting, Print Ads (Packaging, shelf talker, display box, poster, leaflet, ect), and many more.</p>

               <div class="container-btn-social-media mt-8 ml-n2">
            <!-- Instagram -->
                 <v-btn 
                   color="#fff"
                   outlined
                   fab
                   class="hove-effect"
                   href="https://www.instagram.com/bagas_ma/"
                   >
                        <v-icon>mdi-instagram</v-icon>
                   </v-btn>
            <!-- Instagramm end tag -->

            <!-- Yotube -->

            <v-btn 
            color="#fff"
            outlined
            fab
            class="hove-effect"
            href="https://www.youtube.com/channel/UCym3WTZJEGiu8TV9tRZXDGA"
            >
                 <v-icon>mdi-youtube</v-icon>
            </v-btn>

            <!-- Youtube End tag -->

            <!-- Linkedin  -->
            
            <v-btn 
            color="#fff"
            outlined
            fab
            class="hove-effect"
            href="https://www.linkedin.com/in/bagasema/"
            >
                 <v-icon>mdi-linkedin</v-icon>
            </v-btn>

            <!-- Linked in end tag -->

            <!-- whatsapp -->

            <v-btn 
            color="#fff"
            outlined
            fab
            class="hove-effect"
            href="https://wa.me/082219727509"
            >
                 <v-icon>mdi-whatsapp</v-icon>
            </v-btn>

            <!-- whatsapp end tag -->

                
                  

               </div>

            
               <v-btn 
               color="#FFC126"
                 rounded 
                 class="btn-portofolio mt-10 ml-1"
                 to="/porto"
                 >See Portofolio</v-btn>

                </v-col>
            </v-row>
        </v-container>
     
        
    </div>
</template>
<script>
    import profileNav from '../components/NavProfile.vue'
    
    export default {
        components:{
            profileNav,
           
        }

    }
</script>
<style scoped>


    .Profile {
        background: url('../assets/BNW\ 2\ 1.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    
    /* Set up proportionate scaling */
    width: 100%;
    height: 100%;
    overflow: hidden;
    }

    .background-img{
        background: url('../assets/LOGO\ PUTIH\ BG.png');
        background-size: cover;
        width: 652px;
        height: 652px;
        bottom: 0px;
        top: 100px;
        position: absolute;
        z-index: 00;
        
    
    }
   

    .btn-portofolio{
    text-transform: none;
    font-weight: bold;
    color: #000000 !important;
}

.btn-portofolio:hover{
    transform: scale(1.1);
}

    .Profile_text{
        color: #fff;
       width: 100%;
       margin-top: 250px;
       margin-left: 35px;
      
    }
    .big-text{
       display: flex;
       flex-direction: row;
        font-size: 30px !important;
    }

    .colored--text{
        color: #FFC126;
        margin-left: 3%;
    }
    
    .Profile_text p{
        width: 686px;
    }
    .text-designer{
        display: flex;
       flex-direction: row;
        font-size: 60px;
    }

    .text-up::after{
        content: '';
        width: 40px;
        height: 2px;
        background: #FFC126 ;
        position: absolute;
        margin-left: -123px;
        margin-top: -8px;
        
    }


    .hove-effect{
        transition: all 0.5s ease;
        margin: 0 10px;
    }

    .hove-effect:hover{
        background-color: #FFC126 ;
        color: black !important;
    }

    

</style>