<template>
     <div class="relative rounded-[14px] w-[280px] h-[500px] bg-white shadow-lg hover:translate-y-[-2px] transition-all">
        <div>
            <img :src="card.img1" alt="" class=" w-[full] h-[200px] rounded-t-[15px]"/>
        </div>
        <div class="absolute top-[180px] left-[35px] px-[10px] py-[8px] rounded-[40px] bg-[#FAFAFA] flex items-center justify-between gap-2">
               <img :src="card.img2" alt="" class="w-[95px]">
               <span class="font-custom text-[14px] text-[#263238]">{{ card.number }}</span>
        </div>
    <!--Card text content-->
         <div class="flex flex-col gap-3 w-full h-[120px] mt-16 px-3 font-custom ">
              <span class="text-[#777795] text-xs">{{ card.date }}</span>
              <span class="text-[#0B7077] text-[15.2px] font-bold">{{ card.title1 }}</span>
              <span class="text-[#0B7077] text-[15.2px] font-bold mt-[-10px]">{{ card.title }}</span>
              <span class="text-[10px] text-[#4D4D4D]">{{ card.details}}</span>

              <!--price content-->
              <div class="flex justify-between mt-10">
                <div class="flex items-start justify-between gap-3 font-custom">
                    <span class="font-maven text-[16.66px] text-[#FD661F]" >${{ card.pricing }}</span>
                    <img :src="card.discount" alt="">
                </div>
                <div>
                    <button class="bg-[#0B7077] py-2 px-3 rounded-[5px] text-[12px] font-custom text-white hover:translate-y-[-2px] hover:shadow-md transition-all">Enroll now</button>
                </div>
              </div>
        </div>
    </div>
</template>

<script setup>
      const { card } = defineProps(['card'])
</script>

<style lang="scss" scoped>

</style>