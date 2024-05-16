<template>
    <div class="flex flex-row items-center justify-between  w-full">
       <img :src="ben.img1" alt="" width="70px" height="70px" class="md:w-[105px] h-[105px]">
       <!--Benefits-->
            <div class="flex flex-col items-start gap-1 max-sm:w-[305px]">
             <span class="text-[#696984] font-custom font-semibold md:font-medium leading-none text-[18px] md:text-[18.9px] md:leading-normal">{{ ben.details }}</span>
              <span class="text-[#696984] font-custom font-medium leading-none text-[18px] md:text-[18.9px] md:leading-normal">{{ ben.content }}</span>
            </div>
     </div>
     
   
 </template>

 <script setup>
 const {ben} = defineProps(['ben'])
</script>
 