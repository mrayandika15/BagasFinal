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
              <v-carousel 
              hide-delimiters
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
              height="100%"

              >
                <v-carousel-item
                  class="CarouselItem"
                  v-for="(item,i) in $store.state.kisspray"
                  :key="i"
                >
                <v-img
                :src="item"
                class="ImgCarousel"
                ></v-img>
              </v-carousel-item>
              </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col
          offset-md="3"          
          >
            <div class="d-flex TextContainer">
              <h2 class="white--text">KISSPRAY</h2>
              <h2 class="orange--text ml-2">Campaign</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
          offset-md="3"          
          >
          <p class="TextDesc">Kispray merupakan produk cairan semprot yang dapat memudahkan penggunanya saat menyetrika. Pada produk Kispray ini terdapat kandungan yang dapat menghilangkan bau apek pada baju dan juga melindungi baju dari jamur dan bakteri. Serta memiliki varian aroma yang beragam. Selain itu juga, Kispray ini cairannya bisa digunakan untuk pengharum ruangan. Campaign ini ditujukan untuk meningkatkan awareness produk.</p>
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
      border-radius: 25px;
    }

   
  
</style>