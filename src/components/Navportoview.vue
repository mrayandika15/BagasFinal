<template>
    <div>
     <v-app-bar
     app
     color="transparent"
     flat
     class="mt-13 appBarPorto"
     
     >
 <v-btn color="#fff" to="/porto" flat icon class="btn-back" >
     <v-icon
     color="#fff"
     >mdi-arrow-left
 </v-icon>
 Portofolio
 </v-btn>
   
    
   
 
 
     <v-spacer></v-spacer>
     
       <img src="../assets/LOGO PUTIH-01 1.png" alt="" class="logoPutih">
 
     <v-spacer></v-spacer>
    
 
     </v-app-bar>
 
    </div>
 </template>
 <script>
 export default {
     
 }
 </script>
 <style scope>
 
 .logoPutih{
    margin-right: 70px !important;
 }
    .btn-back{
        margin-left: 35px !important;
    }
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