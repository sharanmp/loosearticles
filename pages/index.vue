<template>
  <div>
    <div v-for="article of articles" :key="article.slug">
      <BlogCard
        :title="article.title"
        :sub-title="article.description"
        :img="article.img"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
})
</script>
