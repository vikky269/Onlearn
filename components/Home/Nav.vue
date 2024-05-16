<template>
    <nav class=" flex justify-between items-center w-[84%] mx-auto py-10 overflow-hidden">
         <!--Navbar image-->
        <div class="py-2">
            <img  src="/img/Nav/logo.png" alt="logo">
        </div>
        <!--Navbar links-->
        <div ref="navlink" class="md:static md:min-h-fit z-[1000] bg-[#d2e6e4] md:w-auto absolute min-h-[100vh] left-0 top-[-100%] w-[100%] flex items-center px-5">
            <ul class="flex md:items-center md:gap-[6vw] gap-12 md:flex-row flex-col px-6 font-custom font-medium text-[18px]">
                <li><a class="text-[#FD661F]" href="#">Home</a></li>
                <li><a class="hover:text-[#FD661F]" href="#">Careers</a></li>
                <li><a  class="hover:text-[#FD661F]" href="#">Blog</a></li>
                <li><a  class="hover:text-[#FD661F]" href="#">About us</a></li>
            </ul>
        </div>
        <!--Buttons-->
        <div class="flex items-center gap-5 ">
            <button class="bg-white py-2 px-6 font-custom uppercase text-[#0B7077] hover:translate-y-[-2px] hover:shadow-md transition-all hidden md:block">Log in</button>
            <button class="bg-[#0B7077] py-2 px-6 font-custom uppercase text-white hover:translate-y-[-2px] hover:shadow-md transition-all hidden md:block">Sign up</button>
            <div @click="togglemenu" class="z-[1000] lg:hidden">
                <Icon :name="navbarOpen ? 'mdi:close' : 'mdi:menu'"  class="text-3xl cursor-pointer"/>
            </div>
        </div>

        <!--End of nav-->
    
    </nav>
</template>

<script setup>
import {ref} from 'vue';
const navbarOpen = ref(false)
const navlink = ref(null)

const togglemenu = () => {
    navbarOpen.value = !navbarOpen.value
    if (navlink.value) {
    navlink.value.classList.toggle('top-[-7%]')
  }
}
</script>

<style scoped>
img {
    width: 182.4px;
    height: 37.69px;
}
button{
border-radius: 6px;
}

</style>