<template>
      <div class="flex flex-col items-center justify-center lg:flex lg:flex-row-reverse">
      <!--Right Training-->
      <div class="flex flex-col px-5 h-[100%]">
        <button
          class=" ml-6 font-custom w-fit font-semibold  text-[#0b7077] bg-[#f5f5f5] text-[14px] px-2 py-1 rounded-md">Trainings</button>
        <span class="font-custom font-bold text-[#FD661F] ml-6 mt-6 text-[25px] lg:text-[45px]">Staff Training</span>

        <div class="flex flex-col items-start gap-4 mt-10">
          <div v-for="ben in benefit" :key="ben.details">
            <BenefitCard :ben="ben" />
          </div>
        </div>
      </div>
      <!--left Training-->

      <div class="lg:w-[591px]">
        <img src="/img/benefits/pana.png" alt="" class="lg:h-[450px]">
      </div>
    </div>

</template>

<script setup>
   import BenefitCard from '../Benefits/BenefitCard.vue';

const benefit = ref ([
{
            "img1":"/img/benefits/Group 1.png",
            "details": "Teachers don't get lost in the grid view and have a", 
            "content": "dedicated Podium space."
            
        },
        {
            "img1":"/img/benefits/Group 2.png",
            "details": "TA’s and presenters can be moved to the front of ",
            "content": "the class"
        },
        {
            "img1":"/img/benefits/Group 3.png",
            "details": "Teachers can easily see all students and class data",
             "content": " at One time"
        }
])
</script>

<style  scoped>

</style>