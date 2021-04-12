<template>
    <div class="Mainnav">

        <v-app-bar 
        app 
        color="transparent" 
        flat 
        class="mt-13 ml-5">
        
                
              
        <transition name="toolbar-trans">
            <v-toolbar-title 
            >
                <img src="../assets/LOGO PUTIH-01 1.png" alt="">
            </v-toolbar-title>
        </transition>
           
            <v-spacer></v-spacer>

            <div class="list-nav mr-15">
                <v-btn 
                text  
                color="white" 
                to="/" 
                active-class="no-active"   
                v-bind:class="{ HomeActive : ActivateHome }"
                >Home
            </v-btn>

                <v-btn  
                text 
                color="white" 
                to="/profile"  
                active-class="no-active"
                v-bind:class="{ ProfileActive : ActivateProfile }"
                @click="ActivateHome=True , 
                ActivateProfile = false,
                ActivateTool = True
                "
                >
                Profile
            </v-btn>

                <v-btn 
                text 
                color="white"  
                href="http://www.bagasema.com/"
                active-class="no-active">
                Blog
            </v-btn> 
            </div>

            <Searchbar />


        </v-app-bar>


    </div>
</template>
<script>
    import Searchbar from '../components/SearchBar.vue'
    

    export default {
data() {
    return {
        ActivateHome:true,
        ActivateProfile:false,
        ActivateTool:false,
    }
},
components:{
    Searchbar,
}
    }
</script>
<style scoped>
    
 .v-btn--active.no-active::before {
  opacity: 0 !important;
  
    }

.v-btn.HomeActive::after{
    content: '';
        background-color: #fff;
        width: 70%;
        height: 3px;
        position: absolute;
        margin-top: 6px;
        transition: all 0.5s ease;
}

.v-btn.ProfileActive::after{
    content: '';
        background-color: #fff;
        width: 70%;
        height: 3px;
        position: absolute;
        margin-top: 6px;
        transition: all 0.5s ease;
}

    .v-btn::after{
        content: '';
        background-color: #fff;
        width: 0;
        height: 3px;
        position: absolute;
        margin-top: 6px;
        transition: all 0.5s ease;
    }

    .v-btn:hover::after{
        width: 70%;
    }

    .v-btn{
        font-style: normal !important;
        text-transform: none ;
        
    }

    .list-nav a {
        color: #fff !important;
        text-decoration: none;
        font-size: 17px;
        font-weight: 450;
        letter-spacing: 0.1em;
        display: inline-block;
        position: relative;
        

    }


   


    .navContainer{
        margin-top: 20px;
        
    }

 
   
</style>