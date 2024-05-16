<template>
    <div class="w-[285px] h-[329px] p-3 text-center categ flex flex-col gap-4 text-[#0B7077] hover:shadow-lg hover:rounded-lg scale-y-20" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="flex justify-center items-center">
                  <img :src="cat.img1" alt="" class="max-h-full max-w-full w-[72px] h-[72px]">
            </div>
            <span class="font-custom font-bold text-[18px]">{{ cat.title }}</span>
            <span class="font-custom text-[17px] mt-4 leading-[32px] font-[500]">{{cat.details}}</span>
            <button @mouseover="hover = true" @mouseleave="hover = false" :class="{ 'bg-white': !hover, 'bg-[#FD661F]': hover ,'text-white':hover }" class="mx-auto font-custom font-[500] shadow-lg text-[15px] rounded-[10px] mt-8 px-8 py-2 w-fit">{{hover ? 'Explore courses': cat.btntext }}</button>
      </div>
</template>

<script setup>
import {ref} from "vue";
const {cat} = defineProps(['cat'])
const hover = ref(false)
</script>

<style scoped>

</style>