<template>
  <div>
    <div class="">
      <nav
        class="flex text-sm mt-3 md:ml-4 md:mt-0 justify-center whitespace-nowrap overflow-x-auto pb-3"
      >
        <div
          class="px-4 py-2 rounded-full cursor-pointer"
          :class="
            category === 'all'
              ? 'text-white bg-indigo-400 font-semibold hover:bg-indigo-700'
              : 'text-indigo-600 hover:text-indigo-800'
          "
          @click="category = 'all'"
        >
          All
        </div>
        <div
          class="px-4 py-2 rounded-full cursor-pointer"
          :class="
            category === 'tech'
              ? 'text-white bg-indigo-400 font-semibold hover:bg-indigo-700'
              : 'text-indigo-600 hover:text-indigo-800'
          "
          @click="category = 'tech'"
        >
          Tech
        </div>
        <div
          class="px-4 py-2 rounded-full cursor-pointer"
          :class="
            category === 'travel'
              ? 'text-white bg-indigo-400 font-semibold hover:bg-indigo-700'
              : 'text-indigo-600 hover:text-indigo-800'
          "
          @click="category = 'travel'"
        >
          Travel
        </div>
      </nav>
    </div>
    <div v-for="article of articles" :key="article.dir">
      <BlogCard :blog="article" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content({ deep: true })
      .only(['title', 'description', 'img', 'dir', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  data() {
    return {
      category: 'all',
      articles: [],
    }
  },
  watch: {
    async category(val: string) {
      this.articles = await this.$content({ deep: true })
        .where(val === 'all' ? {} : { category: val })
        .only(['title', 'description', 'img', 'dir', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()
    },
  },
})
</script>
