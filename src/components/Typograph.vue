<template>

    <!-- <div class="Typograph__Container"> -->
                 <div class="typoContainer ml-12" >
       
                    <div class="Typograph">
                        <h1 class="orangeText">WRITING</h1>
                        <h1 class="white--text">AND</h1>
                        <h1 class="orangeText">DESIGN</h1>
                    </div>
                    <div class="column">
                        <p>Sometimes, i got many creative ideas in my mind and i don’t know how to use it. I also won’t let my ideas rooted in my brain. So, i realizing it <b>through design</b> . And not all creative ideas can be visualized, then i write it down <b>through writings</b> .</p>
                    </div>
             
                </div>
    <!-- </div> -->


</template>
<script>
    export default {

    }
</script>
<style scoped>
    /* .Typograph__Container {
        width: 40%;
        height: 100%;
        margin-top: 300px;
        margin-left: 61px;
    } */

    .typoContainer{
        margin-top: clamp(220px, 5%, 220px);;
    }
    .Typograph {
        font-size: 30px;
        letter-spacing: 2px;
        line-height: 75px;
    }

    .column {
        color: #FFFFFF;
        width: 373px;
        font-size: 18px;
        font-weight: 200;
        text-align: justify;
        
    }

    .container-typo{
        border: 1px solid red;
    }
    .orangeText{
        color: #FFC126 ;
    }
</style>