<template>
  <div class="pb-10">
    <div class="max-w-xl mx-auto">
      <hr class="border-2 border-black" />
      <NuxtLink :to="blog.dir">
        <div class="font-bold text-2xl mb-2 mt-4 text-center title">
          {{ blog.title }}
        </div>
      </NuxtLink>
      <v-img
        v-if="blog.img !== ''"
        class="w-full"
        :alt="blog.title"
        :src="blog.dir + '/images/' + blog.img"
      />
      <div class="py-4">
        <p class="text-gray-700 text-base">
          {{ blog.description }}
        </p>
      </div>
      <NuxtLink :to="blog.dir">
        <button class="btn btn-black">READ MORE ></button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlogCard',
  props: {
    blog: {
      required: true,
      type: Object,
    },
  },
})
</script>

<style lang="postcss">
.btn {
  @apply font-bold px-1;
}
.btn-black {
  @apply bg-black text-white;
}
.btn-black:hover {
  @apply bg-gray-700;
}

.title:hover {
  @apply text-gray-700;
}
</style>
