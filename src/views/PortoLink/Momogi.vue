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
        <div class="content__container">
          <v-carousel 
          hide-delimiters
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
          height="100%"

          >
            <v-carousel-item
              class="CarouselItem"
              v-for="(item,i) in $store.state.momogi"
              :key="i"
            >
            <v-img
            :src="item"
            class="ImgCarousel"
            ></v-img>
          </v-carousel-item>
          </v-carousel>

          <div class="container__text">
            <div>
              <div class="d-flex TextContainer">
                <h2 class="white--text">MOMOGI</h2>
                <h2 class="orange--text ml-2">New Identity</h2>
              </div>
              <div class="TextDesc">
                <p >Momogi merupakan snack yang pasti membuat kita bernostalgia dengan masa kecil. Snack ini terkenal dengan tagline-nya “Pasti Mow Mow Lagi” yang terdapat di packagingnya. Saya mencoba me-redesign identitas Momogi ini mulai dari logo, packaging, dan box display (yang selalu ada di ritel).</p>
              </div>
            </div>
         
        
          </div>
          
        </div>
          
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
    position: relative;

  }

  .TextDesc{
    color: #fff;
    width : 614px;
    text-align: justify;
    position: relative;
  }

  

  .ImgCarousel{
    width: 614px;
    height: 404px;
    border-radius: 25px;
  }
  .container__text{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
  }
  .content__container{
    display: flex;
    flex-direction: column;
  }

 
</style>