<template>
  <Layout>
    <h1>{{ $page.guide.title }}</h1>
    <p>{{ $page.guide.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Guide ($id: ID!) {
  guide(id: $id) {
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
