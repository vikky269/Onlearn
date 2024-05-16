<template>
    <div>
        <Header />

        <!-- Nuxt Page -->
        <slot></slot>

        <div class="mt-24 overflow-hidden footer">
          <Footer />
        </div>
    </div>
</template>


<style scoped>
.footer{
  position: relative;
}
.footer::before{
  content: "";
  background-color: #D2E6E4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 45% 40% 0 0;
  transform: scaleX(1.5);
}

</style>