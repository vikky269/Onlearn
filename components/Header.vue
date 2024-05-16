<template>
         <div class=" bg-[#D2E6E4] min-h-screen min-w-full md:w-full z-50 relative container rounded-b-[50px] flex flex-col items-center gap-6">
           
           <div class="white hidden md:block z-[2000] absolute w-[400px] h-[350px] md:w-[1050px] md:h-[770px] overflow-hidden">
               <img src="/img/Nav/white.png" alt="" class="fixed">
              </div>
   
           <Navbar />
              <Hero />
        </div>
</template>


<script setup>
import Navbar from  './Home/Nav.vue'
import Hero from './Home/Hero.vue';

</script>


<style>
.white{
    top: -6px;
    left: 70px;
    transform: rotateX(-12.03deg);
}

</style>