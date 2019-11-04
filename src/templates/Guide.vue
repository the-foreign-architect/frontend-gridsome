<template>
  <Layout>
    <section class="mb-8">
      <!-- COVER IMAGE -->
      <div class="px-4">
        <div class="hidden w-full
          border-2 border-black
          image-cover
          guide-cover
          mb-8
          sm:flex sm:items-center sm:justify-center"
        :style="`background-image: url('${$page.guide.coverImage.src}')`">
          <span class="stripe-shadow-white max-w-xl mx-auto p-4 font-bold text-3xl uppercase leading-none tracking-wide">
              {{$page.guide.city}}
          </span>
        </div>
      </div>
      <div class="px-4 max-w-xl mx-auto">
        <h1 class="text-3xl font-bold leading-none mb-2">{{ $page.guide.title }}</h1>
        <!-- <hr class="border-black border-b-2 mb-4"/> -->
        <p class="text-xl ">{{ $page.guide.excerpt }}</p>
      </div>
    </section>
    <section class="content px-4 max-w-xl mx-auto">
      <vue-remark-content />
    </section>
  </Layout>
</template>

<page-query>
query Guide ($id: ID!) {
  guide(id: $id) {
    title
    excerpt
    city
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
  @apply mb-4 mt-16 text-2xl leading-none p-2 inline-block;
}
.content h3 {
  @apply text-lg;
}

.full-width {
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
  width: 100vw;

}

.guide-cover {
  height: 320px;
}
</style>
