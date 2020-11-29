<template>
  <div>
    <div v-for="article of articles" :key="article.dir" >
      <BlogCard :blog="article" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TButton from "~/components/TButton.vue";

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
  components: {
    TButton
  }
})
</script>