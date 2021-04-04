<template>
    <div>
     <v-app-bar
     app
     color="transparent"
     flat
     class="mt-13 ml-5"
     
     >
 <v-btn color="#fff" to="/" flat icon class="ml-2 btn-back" >
     <v-icon
     color="#fff"
     large
     class="mr-2"
 
     >mdi-arrow-left
 </v-icon>
 Home
 </v-btn>
   
    
   
 
 
     <v-spacer></v-spacer>
     <div class="text-profile">
         <h1>Portofolio</h1>
     </div>
 
     <v-spacer></v-spacer>
    
 
     </v-app-bar>
 
    </div>
 </template>
 <script>
 export default {
     
 }
 </script>
 <style scope>
 
    .btn-back:hover{
     transform: translateX(-6px);
    }
    .text-profile h1{
        color: #fff;
        font-size: 350%;
    } 
 
    .text-profile::after{
        content: '';
        background-color: #FFC126;
        left: 53%;
        width: 90px;
        height: 5px;
        position: absolute;
    }
 
   
  
 
 </style>