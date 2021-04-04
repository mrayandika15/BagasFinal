<template >
    <div class="PortofolioView">
        <NavPortoview />
      <div class="youtubeContainer">
        <iframe class="YoutubePlayer" src="https://www.youtube.com/embed/fbc5TBRXI7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
       
        <!-- Text Container -->
        <v-container
        fluid
        class="ContainerHeadlineText"
        >
        
       
          <v-row
          >
            <v-col
            offset-md="3"
            offset-lg="4"
            md="3"  
            lg="4"
            class="HeadlineText"

            >
            <h1 class="TextKisspray">MAGNUM</h1>
            <h1 class="TextCampaign">MINI Campaign</h1>           
            </v-col>
          </v-row>

          <v-row>
            <v-col
            offset-md="4"
            md="7"
            sm="12"
            >
              <p class="white--text DescContainer">Perencanaan sebuah strategi marketing menjadi hal yang sangat penting untuk dikaji agar produk bisa lebih dikenal di masyarakat, lebih dari itu menjadikan sebuah produk lebih mature. Pada video ini saya dan teman mengikuti lomba perencanaan strategi kampanye marketing untuk produk Magnum Mini.</p>
            </v-col>
          </v-row>

        </v-container>
        

    </div>
</template>
<script>

import NavPortoview from '../../components/Navportoview'

export default {
    components:{
        NavPortoview
    },
}
</script>
<style scoped>


    .PortofolioView{
    background: url('../../assets/boris-stefanik-wxJscL5ZzDA-unsplash\ 1.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    
    /* Set up proportionate scaling */
    width: 100%;
    height: 100%;
    
    overflow: hidden;
    overflow: hidden; 
    }

.youtubeContainer{
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 185px;

}

.youtubeContainer .YoutubePlayer{
    width: 760px;
    height: 515px;
}

.HeadlineText{
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 25px;
  margin-bottom: -30px;
 
}
.TextCampaign{
  color:#FFC126 ;
  margin-left: 10px;
}

.DescContainer{
  width: 650px;
}

.ContainerHeadlineText{
  position: absolute;
  bottom: 150px;
  right: 66px;
}

@media only screen and (max-width:1440px){
.ContainerHeadlineText{
  top: 570px;
  right: 68px;
}

.HeadlineText{
  font-size: 19px;
}

.youtubeContainer{
    margin-top: 150px;

}

.youtubeContainer .YoutubePlayer{
    width: 650px;
    height: 405px;
}


}

@media only screen and (max-width:1280px){

.ContainerHeadlineText{
  top: 680px;
  right: 150px;
}
.HeadlineText{
  font-size: 15px;
}
.youtubeContainer{
    margin-top: 150px;

}

.youtubeContainer .YoutubePlayer{
    width: 770px;
    height: 525px;
}


}


</style>