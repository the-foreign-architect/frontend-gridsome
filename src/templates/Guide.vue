<template>
  <Layout>
    <section>
      <g-image :src="$page.guide.coverImage" />
      <h1 class="text-4xl font-bold leading-none">{{ $page.guide.title }}</h1>
      <p>{{ $page.guide.excerpt }}</p>

    </section>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Guide ($id: ID!) {
  guide(id: $id) {
    title
    excerpt
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
