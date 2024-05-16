<template>
     <div class="flex flex-row items-center gap-2 justify-between sm:justify-between">
       <img :src="gift.img1" alt="" width="24px" height="24px"/>
       <span class="text-[white] font-custom text-wrap font-medium text-[12px] md:text-[15px] leading-4">{{ gift.details }}</span>
     </div>
</template>

<script setup>
    const {gift} = defineProps(['gift'])
</script>

<style  scoped>

</style>