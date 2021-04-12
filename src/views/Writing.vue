<template >
    <div class="Profile">
        <navblog />

        <v-container 
        class="BlogContainer"
        >
            <v-row>
                <v-col
                class="insideBlogContainer"
                >
                <img src="../assets/BANNER PUTIH-01 1.png" alt="" class="logoImage">
                <div class="DescBlog ml-10">
                    <p>I barely talk though i have many things on my mind. Sometimes it's hard to say it out loud, writings is one of the media i can use to implied my thoughts. But it's all about my destitute ideas purpose. So, don't expect too much.</p>

                <v-btn 
                color="#FFC126"
                  rounded 
                  class="btn-portofolio mt-2"
                  >Read Here</v-btn>
                </div>
                </v-col>
            </v-row>
        </v-container>
   

    </div>
</template>
<script>
    import navblog from '../components/Navblog.vue'
    
    export default {
        components:{
            navblog,
        }

    }
</script>
<style scoped>


    .Profile {
    background: url('../assets/Group\ 15.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    
    /* Set up proportionate scaling */
    width: 100%;
    height: 100%;
    overflow: hidden;
    }
    .BlogContainer{
        margin-top: 160px;
    }

    .insideBlogContainer{
        display: flex;
        flex-direction: column; 
        align-items: center;
    }
    .DescBlog{
        color: #fff;
        display: flex;
        flex-direction: column;
        position: relative;
        bottom: 60px;
        right: 20px;
    }
    .DescBlog p{
        width: 497px;
        height:207px ;
        font-size: 24px;
        text-align: justify;
    }

    .logoImage{
        width:775px !important; 
        height:435px !important ;
    }

    .btn-portofolio{
    text-transform: none;
    font-weight: bolder !important;
    font-size: 15px;
    color: #000000 !important;
    width: 106px !important;
    }

    .btn-portofolio:hover{
    transform: scale(1.1);
    }
    

    
</style>