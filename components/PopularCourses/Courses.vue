<template>
    <section class="flex items-center justify-center md:flex  flex-col md:items-center md:justify-center gap-2 relative">
    <!--popular courses section-->
    <div class="text-center">
      <h1 class="text-5xl font-custom font-bold text-[#FD661F]">Popular Courses</h1>
      <div class="absolute md:left-[700px] md:top-[45px] top-[100px] left-[90px]">
        <img src="/img/courses/Vector 1.png" alt="">
      </div>
    </div>

    <!--filtering buttons section-->
    <div class="grid grid-cols-2 md:flex md:items-center gap-6 mt-8">
      <button class="font-custom text-[12px] rounded-[5px] bg-[#0B7077] py-2 px-3 text-white hover:translate-y-[-2px] hover:shadow-md transition-all">All programme</button>
      <div v-for="course in courses" :key="course.content">
        <button class="course font-custom rounded-[5px] text-[12px] text-[#818c96] py-2 px-3 hover:translate-y-[-2px] hover:shadow-md transition-all hover:bg-[#0b7077] hover:outline-none hover:text-white">{{ course.content }}</button>
      </div>
    </div> 

    <!--cards section-->
    
    <div class="p-2 grid  grid-cols-1 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5 xl:flex xl:items-center xl:gap-6 mt-8" >
      <div v-for="card in cards" :key="card.pricing">
        <Card :card="card" />
      </div>
    </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import  Card from './Card.vue'
  const cards = ref([
  {
            img1:"/img/cards/rect1.png",
             img2:"/img/cards/Group.png",
             number: "+ 40 students",
             date: "1-28 july 2022",
             title1: "Product Management Basic-",
             title: "Course",
             details: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
             pricing: 380,
             discount: "/img/cards/Discount.png"

        },
        {
            img1:"/img/cards/rect2.png",
             img2:"/img/cards/Group.png",
             number: "+ 11 students",
             date: "1-28 july 2022",
             title1: "BM Data Science Professional",
             title: "Certificate",
             details: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
             pricing: 678,
             discount:"/img/cards/Discount.png"

        },
        {
            img1:"/img/cards/rect3.png",
             img2:"/img/cards/Group.png",
             number: "+ 234 students",
             date: "1-28 july 2022",
             title1: "The Science of Well-Being",
             title: "For Everyone",
             details: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
             pricing: 123,
             discount: "/img/cards/Discount.png"

        },
        {
            img1:"/img/cards/rect4.png",
             img2:"/img/cards/Group.png",
             number: "+ 342 students",
             date: "1-28 july 2022",
             title1: "Python for Everybody",
             title: "Specialization",
            details: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
             pricing: 567,
             discount:"/img/cards/Discount.png" 

        }
  ])

  const courses = ref ([
      { content: "UI/UX Design"   },
      { content: "Program Design" },
      { content: "Program Design" },
      { content: "Program Design" }
    
  ])


</script>

<style scoped>
.course {
  border: 1px solid #c4c4c4;
}
</style>