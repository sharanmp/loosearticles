<template >
  <div>
    <article class="prose prose-sm sm:prose dark:prose-dark mx-auto">
      <hr class="border-2 dark-mode:border-white rounded-lg"  />
      <nuxt-content :document="article" />
      <p>Date: {{ formatDate(article.createdAt) }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const blogPath = `/${params.slug}`
    const [article] = await $content({ deep: true })
      .where({ dir: blogPath })
      .fetch()

    return { article }
  },
  methods: {
    formatDate(date: string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>

