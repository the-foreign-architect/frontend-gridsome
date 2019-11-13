<template>
  <Layout>
    <div class="px-4 max-w-xl mx-auto">
      <section class=" stripe-shadow-black mb-12">
        <g-image :src="$page.post.coverImage" class="border-2 border-black"/>
        <h1 class=" uppercase tracking-wide leading-tight px-4 pt-4 mb-2
              font-bold text-white bg-black w-full text-2xl border-black
              ">{{ $page.post.title }}</h1>
        <p class="text-xl px-4 mb-4">{{ $page.post.excerpt }}</p>
      </section>
    <section class="mb-24 content-page">
      <VueRemarkContent class="flow"/>
    </section>
    <section class="mb-12">
      <vue-disqus shortname="the-foreign-architect" :identifier="$page.post.title"></vue-disqus>
    </section>
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    excerpt
    content
    coverImage (width: 1920, height: 800, quality: 90)
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { key: "description", name: "description", content: this.$page.post.excerpt },
        { key: "twitter:description", name: "twitter:description", content: this.$page.post.excerpt },
        { key: "twitter:title",name: "twitter:title", content: this.$page.post.title },
        { key: "twitter:image",name: "twitter:image", content: this.$page.post.coverImage.src },
        { key: "og:type",name: "og:type", content: "article" },
        { key: "og:title",name: "og:title", content: this.$page.post.title },
        { key: "og:description", name: "og:description", content: this.$page.post.excerpt },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.post.date
        },
        { key: "og:image", name: "og:image",content: this.$page.post.coverImage.src },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
