<template>
  <Layout>
    <section class="mb-12 px-4">
      <div class="md:flex">
        <div class="mb-4 md:mr-12">
          <h1
            class="stripe-shadow-black uppercase tracking-wide px-4 py-1 mb-4
            font-bold text-white bg-black inline-block
            lg:text-lg">
              {{ $page.singlePage.title }}
          </h1>
        </div>
        <div class="content-page max-w-xl">
          <VueRemarkContent />
        </div>
      </div>
    </section>


  </Layout>
</template>

<page-query>
query singlePage ($id: ID!) {
  singlePage(id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.singlePage.title,
      meta: [
        { key: "twitter:title",name: "twitter:title", content: this.$page.post.title },
        { key: "og:title",name: "og:title", content: this.$page.post.title },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.post.date
        },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
}
</script>

<style >


</style>
