<template>
  <Layout>
    <section class="px-4 mb-12 text-lg">
      <p class="font-sans font-bold">Travel for architecture.</p>
      <p >City guides and articles with the best contemporary architecture around the world. Written by an architect for architecture lovers.</p>
    </section>
    <section class="mb-12">
      <div class="mb-2">
        <h2 class="font-bold px-4 text-white bg-black inline-block">City Guides</h2>
      </div>
      <p class="px-4 mb-3">Curated guides with my selection of the most exciting new architecture in each of these cities.</p>
      <div v-for="{node} in $page.guides.edges" :key="node.id"
        class="w-full h-32 flex items-center image-cover"
        :style="`background-image: url('${node.coverImage.src}')`"
      >
        <h3 class="inline-block uppercase font-bold tracking-wide pl-4 pr-2 bg-white text-center">{{node.city}}</h3>
      </div>
    </section>
    <section class="mb-12">
      <div class="mb-2">
        <h2 class="font-bold px-4 text-white bg-black inline-block">Latest Map</h2>
      </div>
      <p
        class="mb-6 px-4"
      >Before, during, and after I go in a trip, I spend a lot of time building maps with selection of buildings I wanna see. Here is the latest one.</p>
      <guide-map
          title="Latest Map"
          map="https://www.google.com/maps/d/embed?mid=19Bg9JybbEZ-nxtg_LGtidjBKz3M"
        />
    </section>
    <section class="mb-12">
      <div class="mb-2">
        <h2 class="font-bold px-4 text-white bg-black inline-block">Blog</h2>
      </div>
      <p class="px-4 mb-3">Musings about architecture and travel</p>
      <div v-for="{node} in $page.blog.edges" :key="node.id"
        class="flex mb-4 items-center"
      >
        <g-image :src="node.coverImage" class="w-24 h-24"/>
        <div class="px-4">
          <p class="text-xs uppercase">{{node.date | formatDate("dd.MMM")}}</p>
          <h3 class="font-bold leading-none">{{node.title}}</h3>
        </div>


      </div>
    </section>
    <section>
      <div class="mb-2">
        <h2 class="font-bold px-4 text-white bg-black inline-block">What's this?</h2>
      </div>
      <div class="px-4 ">

          <p
            class="mb-4"
          >Hi! My name is Daniel and I am an architect. I also love to travel and see and experience architecture around the world.</p>
          <g-image src="../assets/daniel.jpg" alt="Daniel da Rocha in Beijing" class="w-3/4 mx-auto mb-4"/>

          <p
            class="mb-4"
          >This site is my contribution to my fellow architecture fans: a collection of guides, maps, and insights about the new architecture happening out there.</p>
          <p class="mb-4">
            Start by checking out the
            <a href="#guides">guides</a> above and the latest posts on the blog. You can also learn more about me
            <a
              href="/about"
            >here.</a>
          </p>
          <p class="mb-4">
            Make sure you
            <a href="/newsletter">sign up</a>
            to receive the latest updates. You can also find me on:
          </p>
          <div class="flex justify-center">
            <a
              href="https://twitter.com/theForeignArch"
              class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
              target="_blank"
              alt="@theForeignArch on Twitter"
              aria-label="Open my profile on Twitter"
              rel="noopener"
            >
              <i class="fab fa-twitter-square fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/danrocha/"
              class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
              target="_blank"
              alt="Daniel da Rocha on LinkedIn"
              aria-label="Open my profile on Linkedin"
              rel="noopener"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://www.pinterest.de/theforeignarchitect/pins/"
              class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
              alt="@theForeignArchitect on Pinterest"
              target="_blank"
              aria-label="Open my profile on Pinterest"
              rel="noopener"
            >
              <i class="fab fa-pinterest-square fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/danroc/"
              class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
              target="_blank"
              alt="@danroc on Instagram"
              aria-label="Open my profile on Instagram"
              rel="noopener"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  guides: allGuide (filter: {chapter: {eq: 0}}, sortBy: "city" ){
    edges {
      node {
        id
        title
        excerpt
        city
        coverImage (width: 300, height: 300, quality: 90)
      }
    }
  }
  blog: allBlog (limit:4){
    edges {
      node {
        id
        title
        excerpt
        coverImage (width: 300, height: 200, quality: 90)
        date
      }
    }
  }
}
</page-query>

<script>
import GuideMap from '~/components/GuideMap'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    GuideMap
  }
}
</script>

<style scoped>

.image-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
