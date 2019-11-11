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
          max-h-full
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
    <section v-if="$page.guide.series && $page.guide.chapter > 0" class="content px-4 max-w-xl mx-auto">
      <series-navigation
        :total-chapters="$page.guide.series.belongsTo.totalCount"
        :current-chapter="$page.guide.chapter"
        :chapters="$page.guide.series.belongsTo.edges.map(edge => edge.node)"/>
    </section>
    <section class="content px-4 max-w-xl mx-auto">
      <vue-remark-content />
    </section>
    <section v-if="$page.guide.series && $page.guide.chapter > 0" class="content px-4 max-w-xl mx-auto">
      <series-navigation
        :total-chapters="$page.guide.series.belongsTo.totalCount"
        :current-chapter="$page.guide.chapter"
        :chapters="$page.guide.series.belongsTo.edges.map(edge => edge.node)"/>
    </section>
  </Layout>
</template>

<page-query>
query Guide ($id: ID!) {
  guide(id: $id) {
    title
    excerpt
    city
    chapter
    series {
      id
      belongsTo {
        totalCount
        edges {
          node {
            ...on Guide {
              id
              title
              path
              chapter
            }
          }
        }
      }
    }
    coverImage (width: 1920, height: 800, quality: 90)
  }
}
</page-query

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
.content  ul {
  @apply mb-4;
  list-style-type: square;
}
.content  ul > li {
  @apply mb-2;
}
.guide-cover {
  height: 320px;
}

.content #buildings + ul, .content nav > ul {
  @apply list-none;
}
.content #buildings + ul > li, .content nav > p, .content nav > ul > li {
  @apply mb-1;
}
</style>
