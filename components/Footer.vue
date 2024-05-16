<template>
  <footer class="relative">
     <div class="grid grid-cols-1 pt-28 gap-3 md:grid-cols-2 md:gap-6 lg:flex lg:items-center justify-evenly py-6 sm:px-[35px]">
       <div class="flex flex-col ml-9 gap-7 items-start w-[279px] h-[320px] hover:cursor-pointer">
        <!--onlearn logo-->
           <div class="flex items-center justify-between gap-4">
              <img src="/img/footer/Frame 19.png" alt="" class="w-[50.95px] h-[30.46px]">
              <span class="text-[#0b7077] font-custom font-extrabold text-[30px]">Onlearn</span>
           </div>
           <!--location-->
           <div class="flex flex-col gap-3">
              <div class="flex items-center gap-4">
                <img src="/img/footer/Location.png" alt="" class="w-[23px] h-[21px]">
              <span class="text-[#0b7077] font-bold text-[15px] font-custom">Address:</span>
              </div>
              <span class="font-custom text-[#0b7077] text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit,</span>
           </div>
            <!--Telephone-->
            <div class="flex items-center justify-between gap-4">
              <img src="/img/footer/Stroke 1.png" alt="" class="w-[19px] h-[19px]">
              <span class="text-[#0b7077] font-medium font-custom text-[14px]">Tel :+9229341037</span>
           </div>
            <!--Response time-->
           <div class="flex items-center justify-between gap-4">
              <img src="/img/footer/Time Circle.png" alt="" class="w-[24px] h-[24px]">
              <span class="text-[#0b7077] font-medium font-custom text-[14px]">Response hours: 8 to 20</span>
           </div>

           <!--email-->
           <div class="flex items-center justify-between gap-4">
              <img src="/img/footer/Message.png" alt="" class="w-[24px] h-[24px]">
              <span class="text-[#0b7077] font-medium font-custom text-[14px]">Email: info@onlearn.com</span>
           </div>
       </div>

       <!--SECOND DIV-->
       <div class="flex flex-col gap-7 text-[#0b7077] hover:cursor-pointer ml-9">
        <a href="#" class="font-custom text-[#0A033C] text-[15px] font-bold">Categories</a >
        <a href="#"  class="font-custom text-[14px] font-medium">Counselling</a >
        <a href="#"  class="font-custom text-[14px] font-medium">Health and fitness</a >
        <a href="#"  class="font-custom text-[14px] font-medium">Individual develpment</a >
        <a href="#"  class="font-custom text-[14px] font-medium">more</a >
       </div>

       <!--third div-->
       <div class="flex flex-col gap-7 text-[#0b7077] hover:cursor-pointer ml-9">
        <a class="font-custom text-[#0A033C] text-[15px] font-bold">Links</a >
        <a href="#" class="font-custom text-[14px] font-medium">About us</a>
        <a href="#" class="font-custom text-[14px] font-medium">blog</a>
       </div>

       <!--last div-->
       <div class="flex flex-col items-center gap-3 md:gap-5 font-custom lg:items-center md:items-start mt-6">
         <span class="text-[#0A033C] text-[13px] md:text-[15px] font-normal">Stay up to date with the latest courses</span>
         <div class="flex items-center bg-white px-10 rounded-xl relative">
            <input type="email" placeholder="Email" class="py-6 px-8 max-md:w-[150px] outline-none">
            <button class="bg-[#0b7077] px-3 py-1 rounded-[6px] md:px-8 md:py-3 md:rounded-[15px] z-[50] text-white">Send</button>
         </div>
       </div>
     </div>

     <div class="absolute sm:top-[650px] sm:right-[-150px] lg:right-[-150px] lg:top-[170px] lg:w-[835px] lg:h-[835px]">
      <img src="/img/footer/Group .png" alt="" width="800px" height="835px" class="group">
     </div>
   </footer>
</template>

<script>
export default {

}
</script>


<style>
.group{
    transform: rotate(-15.15deg);
}

</style>