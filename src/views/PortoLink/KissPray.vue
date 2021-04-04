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
            <h1 class="TextKisspray">KISSPRAY</h1>
            <h1 class="TextCampaign">Campaign</h1>           
            </v-col>
          </v-row>

          <v-row>
            <v-col
            offset-md="4"
            md="7"
            sm="12"
            >
              <p class="white--text DescContainer">Kispray merupakan produk cairan semprot yang dapat memudahkan penggunanya saat menyetrika. Pada produk Kispray ini terdapat kandungan yang dapat menghilangkan bau apek pada baju dan juga melindungi baju dari jamur dan bakteri. Serta memiliki varian aroma yang beragam. Selain itu juga, Kispray ini cairannya bisa digunakan untuk pengharum ruangan. Campaign ini ditujukan untuk meningkatkan awareness produk.</p>
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
        "https://iili.io/qOLlTl.md.png",
        "https://iili.io/qOZHf1.md.png",
        "https://iili.io/qOZF5J.md.png",
        "https://iili.io/qOZKOv.md.png",
        "https://iili.io/qOZCWN.md.png",
        "https://iili.io/qOZxft.md.png",
        "https://iili.io/qOZz0X.md.png",
        "https://iili.io/qOZuJs.md.png",
        "https://iili.io/qOZA5G.md.png",
        "https://iili.io/qOtoTx.md.png",
        "https://iili.io/qOtxhQ.md.png",
        "https://iili.io/qODKnp.md.png",
        "https://iili.io/qODrVp.md.png",
        "https://iili.io/qObfbj.md.png",
        "https://iili.io/qObKOb.md.png",
        "https://iili.io/qObF5u.md.png",
        "https://iili.io/qObD21.md.png"

        

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
  top: 560px;
  right: 90px;
}

}


</style>