<template>
    <div class="mt-28 course w-full overflow-hidden">
        <Courses />
    </div>

    <div class="mt-28 overflow-hidden">
        <Category />
    </div>

    <div class="mt-28 overflow-hidden">
        <Benefit />
    </div>

    <div class="mt-28 overflow-hidden">
        <Training />
    </div>

    <div class="mt-28 overflow-hidden">
        <gift />
    </div>




</template>

<script setup>
import Courses from '~/components/PopularCourses/Courses.vue';
import Category from '~/components/CourseCategory/Category.vue';
import Benefit from '~/components/Benefits/Benefit.vue';
import Training from '~/components/Training/Training.vue';
import gift from '~/components/giftCard/gift.vue';

</script>