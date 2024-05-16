<template>
    <div>
        <Header />

        <!-- Nuxt Page -->
        <slot></slot>

        <div class="mt-28 overflow-hidden footer h-full">
          <Footer />
        </div>
    </div>
</template>


<style scoped>
.footer{
  background-image: url("/public/img/footer/Rectangle .png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


</style>