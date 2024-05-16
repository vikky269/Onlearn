<template>
    <div class="text-center mt-12 relative flex flex-col items-center">
      <h1 class=" md:text-4xl text-[25px] font-custom font-bold text-[#0B7077]">Courses Category</h1>
      <div class="absolute top-[42px] right-[55px] md:right-[120px] lg:right-[510px] lg:top-[43px]">
        <img src="/img/category/Vector 9.png" alt="">
      </div>

      <div class="mt-10">
        <span class="text-center font-custom  leading-1 font-medium text-[#696984] md:text-[14px] lg:text-[20px] lg:leading-tight text-[13px]">Onlearing is one powerful online software suite that combines all the tools
          needed to  <br/> run a successful school or office.</span>
      </div>
      <!--Course category cards-->

      <div class="flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5 xl:flex xl:flex-row gap-4 mt-10 category">
        <div v-for="cat in category" :key="cat.title" class="mt-8">
          <CategCard :cat="cat" />
        </div>
      </div>

      <button
        class="font-custom text-[#0b7077] course-btn px-8 py-1 mt-12 rounded-lg hover:text-white hover:bg-[#FD661F] hover:border-none">
        view all </button>
    </div>
</template>

<script setup>
import CategCard from './CategCard.vue';

const category = ref([
        {
            img1:"/img/category/beauty.png",
            title:"Beauty",
            details: "One powerful online software suite that combines",
             btntext:   "more"
        },
        {
            img1:"/img/category/medical.png",
            title:"Medical",
            details: "One powerful online software suite that combines",
             btntext:   "more"
        },
        {
            img1:"/img/category/sports.png",
            title:"Sports",
            details: "One powerful online software suite that combines",
             btntext:   "more"
        },
        {
            img1:"/img/category/nutrition.png",
            title:"Nutrition",
            details: "One powerful online software suite that combines",
             btntext:   "more"
        }
])

</script>

<style scoped>
.course-btn{
  border: 1px solid #0b7077;
}
</style>