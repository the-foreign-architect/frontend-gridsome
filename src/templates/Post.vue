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
    <section class="mb-12 content-page">
      <VueRemarkContent />
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

  }
</script>

<style lang="scss" scoped>

</style>
