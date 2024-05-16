<template>
    <div
      class=" relative w-[305px] px-6 flex flex-col items-start md:w-[650px] h-[500px] lg:flex lg:items-center z-[-1] gap-2 lg:justify-between bg-[#DF1C25] lg:w-[1124px] lg:h-[401px] mt-[120px] rounded-3xl mx-auto mb-10">
      <!--Left gift card-->
      <div class="flex flex-col md:px-10 h-full pb-4 absolute left-0">
        
        <span class="font-Inter text-[20px] leading-tight font-bold text-[white] max-sm:px-6 mt-6 lg:text-[40px]">
          Why You should buy <br/>giftcards ?</span>

        <div class="flex flex-col items-start gap-12 lg:gap-4 sm:gap-10 mt-10 pl-5 sm:mt-20 sm:pl-[0] sm:ml-[-2] lg:mt-12">
          <div v-for="gift in giftcard" :key="gift.id">
            <giftCard :gift="gift"/>
          </div>
        </div>

        <button
          class="mt-[110px] z-[1000] sm:ml-0 lg:mt-12 ml-6 font-custom w-fit font-semibold  text-[#0b7077] uppercase  bg-[#f5f5f5] text-[14px] px-4 py-2 rounded-md">buy now</button>
      </div>
         <!-- vector-->
          
         <div class="absolute bottom-0">
         <img src="/img/gift/Group.png" alt="">
         </div>


      <!--Rght gift card-->
      <div class="absolute top-[199px] right-[0] lg:top-[-100px] lg:right-[-30px]">
        <img src="/img/gift/image 6.png" alt="" class=" w-[300px] h-[300px] lg:w-[550px] lg:h-[500px]">
      </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
   const giftcard = ref ([
   {
            id: "1",
            img1:"/img/gift/star.png",
            details: "Teachers don't get lost in the grid view and have a dedicated podium space"
            
        },
        { 
             id:"2",
            img1:"/img/gift/star.png",
            details: "Teachers don't get lost in the grid view and have a dedicated podium space"
        },
        {
             id:"3",
            img1:"/img/gift/star.png",
            details: "Teachers don't get lost in the grid view and have a dedicated podium space"
        }
   ])

</script>

<style scoped>

</style>