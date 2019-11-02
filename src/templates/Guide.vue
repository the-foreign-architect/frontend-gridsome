<template>
  <Layout>
    <section class="px-3 mb-8">
      <g-image :src="$page.guide.coverImage" class="hidden w-full h-64 object-cover border-2 border-black"/>
      <div class="text-white bg-black p-4 stripe-shadow-black">
        <h1 class="text-3xl font-bold leading-none mb-2">{{ $page.guide.title }}</h1>
        <p>{{ $page.guide.excerpt }}</p>
      </div>
    </section>
    <section class="content px-4">
      <vue-remark-content />
    </section>
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

<style>
.content p{
  @apply mb-4;
}
.content h2, h3 {
  @apply font-bold mb-3 mt-8;
}
.content h2 {
  @apply text-2xl leading-tight;
}
.content h3 {
  @apply text-lg;
}

</style>
