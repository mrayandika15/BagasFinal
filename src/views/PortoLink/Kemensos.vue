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
          <div class="container__video">
            <iframe class="ImgCarousel" src="https://www.youtube.com/embed/fbc5TBRXI7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        
          <div class="container__text">
            <div>
              <div class="d-flex TextContainer">
                <h2 class="white--text">KEMENSOS</h2>
                <h2 class="orange--text ml-2">TVC</h2>
              </div>
              <div class="TextDesc">
                <p >Covid-19 mewabah dengan begitu cepat di berbagai belahan dunia. Namun, semakin banyak kasus yang terjadi tapi semakin banyak pula yang tidak peduli akan kehadiran virus yang satu ini. Pada video kampanye ini saya mencoba menyentuh sisi emosional target audiens untuk mengampanyekan bahanya virus ini.</p>
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

  .container__video{
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
</style>