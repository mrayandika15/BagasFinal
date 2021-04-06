<template >
  <div class="PortofolioView">
      <NavPortoview />
    <v-container
    fluid
    class="CarouselContainer"
    >
      <v-row
      >
        <v-col
        align="center"
        lg="8"
        offset-lg="2"
        >
        <iframe class="ImgCarousel" src="https://www.youtube.com/embed/Zxw1er0H-tY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        offset-md="3"          
        >
          <div class="d-flex TextContainer">
            <h2 class="white--text">MAGNUM MINI</h2>
            <h2 class="orange--text ml-2">Campaign</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        offset-md="3"          
        >
        <p class="TextDesc">Perencanaan sebuah strategi marketing menjadi hal yang sangat penting untuk dikaji agar produk bisa lebih dikenal di masyarakat, lebih dari itu menjadikan sebuah produk lebih mature. Pada video ini saya dan teman mengikuti lomba perencanaan strategi kampanye marketing untuk produk Magnum Mini. </p>
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

  .CarouselContainer{
    margin-top: 130px;
  }
  .TextContainer{
    font-size: 20px;
  }

  .TextDesc{
    color: #fff;
    width : 714px;
    text-align: justify;
    position: relative;
    bottom: 25px;
  }

  .ImgCarousel{
    width: 614px;
    height: 404px;
    border-radius: 25px !important;
  }


</style>