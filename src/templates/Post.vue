<template>
  <Layout>
    <h1>{{ $page.blog.title }}</h1>
    <p>{{ $page.blog.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title
    excerpt
  }
}
</page-query>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
