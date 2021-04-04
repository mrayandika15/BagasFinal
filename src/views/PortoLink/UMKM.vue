<template >
    <div class="PortofolioView">
        <NavPortoview />
      


     <transition-group name="fade" tag="div">
       <div v-for="i in [currentIndex]" :key="i" class="imgContainer">
         <img :src="currentImg" />
       </div>
     </transition-group>       
    <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a> -->
    <v-icon class="prev" medium @click="prev">mdi-arrow-left</v-icon>
     <!-- <a class="next" @click="next" href="#">&#10095; Next</a> -->
     <v-icon class="next" medium @click="next">mdi-arrow-right</v-icon>


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
            <h1 class="TextKisspray">UMKM</h1>
            <h1 class="TextCampaign">Branding</h1>           
            </v-col>
          </v-row>

          <v-row>
            <v-col
            offset-md="4"
            md="7"
            sm="12"
            >
              <p class="white--text DescContainer">Saat pandemi covid-19 mewabah di berbagai belahan dunia, banyak sekali orang yang mengisi kediaman mereka di rumah dengan menghasilkan produk yang memiliki nilai jual untuk menghasilkan pundi-pundi uang, salah satunya yaitu membangun usaha UMKM. Namun, mereka tidak memiliki pengetahuan bagaimana cara menaikkan brand awareness melalui branding atau pun inovasi terkait produk yang dibuat. </p>
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
    data() {
        return {
            images: [
            "https://iili.io/qOyaXj.md.png",
            "https://iili.io/qOycLx.md.png",
            "https://iili.io/qOy0qQ.md.png",
            "https://iili.io/qOy11V.md.png",
            "https://iili.io/qOyMdP.md.png",
            "https://iili.io/qOyV71.md.png",
            "https://iili.io/qOyWkF.md.png",
            "https://iili.io/qOyXmg.md.png",
            "https://iili.io/qOyNLv.md.png",
            "https://iili.io/qOyeBR.md.png",
            "https://iili.io/qOyk1p.md.png",
            "https://iili.io/qOyPhG.md.png",
            "https://iili.io/qOyLB4.md.png",
            "https://iili.io/qOybY7.md.png"

        

      ],
      currentIndex: 0
        }
    },
  methods: {
   
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  display: flex;
  width:100%;
  opacity: 1;
  position: absolute;
}



.fade-enter,
.fade-leave-to {
  display: none;
  width:100%;
  opacity: 0;

}


.imgContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
}

img {
  /* height:504px;
  width:714px; */
  width: 714px ;
  height: 504px;

  border-radius: 25px;
}

.prev, .next {
  cursor: pointer;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  position: absolute;
  margin-top: -230px;
}


.prev{
  left: 510px;
}

.next{
  right: 510px;
}
.prev:hover{
    transform: translateX(-10px);
}

.next:hover{
    transform: translateX(10px);
}

.HeadlineText{
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 26px;
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
}

@media only screen and (max-width:1440px){

.prev,.next{
    bottom: 380px;
  }
.prev{
  left: 290px;
}

.next{
  right: 290px;
}

img {
  /* height:504px;
  width:714px; */
  max-width: 614px ;
  max-height: 404px;
}

.imgContainer{
    margin-top: 145px;
}

.ContainerHeadlineText{
  top: 538px;
  right: 68px;
}

.HeadlineText{
  font-size: 20px;
}

}

@media only screen and (max-width:1280px){

.prev,.next{
    bottom: 495px;
  }
.prev{
  left: 255px;
}

.next{
  right: 255px;
}

img {
  /* height:504px;
  width:714px; */
  max-width: 614px ;
  max-height: 404px;
}

.imgContainer{
    margin-top: 160px;
}

.ContainerHeadlineText{
  top: 570px;
  right: 90px;
}
.HeadlineText{
  font-size: 19px;
}

}


</style>