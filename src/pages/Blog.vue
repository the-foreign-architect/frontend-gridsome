<template>
  <Layout>
    <section class="px-4 mb-12">
      <div class="md:flex">
        <div class="mb-4 sm:w-3/4 md:w-1/3 xl:max-w-sm">
          <h2
            class="inline-block px-4 py-1 mb-4 font-bold tracking-wide text-white uppercase bg-black stripe-shadow-black lg:text-lg">
              Blog
          </h2>
          <p>
            Musings about architecture and travel.
          </p>
        </div>
          <div class="w-full md:w-2/3 xl:w-full">
            <blog-grid :posts="$page.posts.edges" :show-excerpt="true"/>
          </div>
      </div>
    </section>
  </Layout>
</template>
<page-query>
  query {
    posts: allPost (limit:20){
      edges {
        node {
          id
          title
          excerpt
          coverImage (width: 300, height: 200, quality: 90)
          date
          path
        }
      }
    }
  }
</page-query>

<script>
import BlogGrid from '~/components/BlogGrid'

export default {
  metaInfo() {
    return {
      title: 'Blog',
    }
  },
  components: {
    BlogGrid
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 1rem;
}
@screen sm {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@screen md {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

@screen lg {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}


</style>
