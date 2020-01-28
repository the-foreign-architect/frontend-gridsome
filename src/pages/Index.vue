<template>
  <Layout>
    <section
      class="px-4 mb-12 text-lg sm:w-3/4 sm:text-xl md:text-2xl md:py-12 md:flex md:w-full md:p-0 lg:text-3xl xl:text-4xl xl:py-16"
    >
      <div class="hidden md:w-1/3 md:block xl:max-w-sm">&nbsp;</div>
      <div class="md:w-2/3 xl:w-full md:px-4">
        <p class="font-sans font-bold">Travel for architecture.</p>
        <p class="xl:w-3/4">
          City guides and articles with the best contemporary architecture
          around the world. Written by an architect for architecture lovers.
        </p>
      </div>
    </section>

    <!-- CITY GUIDES -->
    <home-section>
      <template #title>
        City Guides
      </template>
      <template #description>
        <p>
          Curated guides with my selection of the most exciting new architecture
          in each of these cities.
        </p>
        <p class="font-bold">
          <g-link to="/guides">See all cities &rarr;</g-link>
        </p>
      </template>
      <template #content>
        <guide-grid :guides="$page.guides.edges" />
      </template>
    </home-section>

    <!-- MAP -->
    <home-section>
      <template #title>
        Latest Map
      </template>
      <template #description>
        Before, during, and after I go in a trip, I spend a lot of time building
        maps with selection of buildings I wanna see. Here is the latest one.
      </template>
      <template #content>
        <iframe
          title="Latest Map"
          src="https://www.google.com/maps/d/embed?mid=1T21-qW_WpDlybRLDl1ihp-KXH7w&hl=en"
          height="500"
          scrolling="no"
          class="w-full border-2 border-black"
        ></iframe>
      </template>
    </home-section>

    <!-- BLOG -->
    <home-section>
      <template #title>
        Blog
      </template>
      <template #description>
        <p>Musings about architecture and travel.</p>
        <p class="font-bold">
          <g-link to="/blog">See all posts &rarr;</g-link>
        </p>
      </template>
      <template #content>
        <blog-grid :posts="$page.blog.edges" :show-excerpt="true" />
      </template>
    </home-section>

    <!-- ABOUT -->
    <section
      class="flex flex-col items-center justify-center py-12 text-white bg-black"
    >
      <h2
        class="inline-block px-4 py-1 mb-8 font-bold tracking-wide text-black uppercase bg-white stripe-shadow-white lg:text-lg"
      >
        What's this?
      </h2>

      <div
        class="px-4 mb-4 sm:mb-12 sm:max-w-2xl sm:mx-auto sm:flex sm:items-start md:p-0"
      >
        <g-image
          src="../assets/daniel.jpg"
          alt="Daniel da Rocha in Beijing"
          class="flex-none w-64 h-auto mx-auto mb-4 border-2 border-white sm:m-0 "
        />
        <div class="mb-8 sm:px-4">
          <p class="mb-4">
            Hi! My name is Daniel and I am an architect. I also love to travel
            and see and experience architecture around the world.
          </p>

          <p class="mb-4">
            This site is my contribution to my fellow architecture fans: a
            collection of guides, maps, and insights about the new architecture
            happening out there.
          </p>
          <p class="mb-4">
            Start by checking out the
            <a href="#guides" class="white-link">guides</a> above and the latest
            posts on the blog. You can also learn more about me
            <a href="/about" class="white-link">here.</a>
          </p>
          <p class="mb-8">
            Make sure you
            <a href="/newsletter" class="white-link">sign up</a>
            to receive the latest updates.
          </p>
        </div>
      </div>
      <div class="flex justify-center text-white">
        <a
          href="https://twitter.com/theForeignArch"
          class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
          target="_blank"
          alt="@theForeignArch on Twitter"
          aria-label="Open my profile on Twitter"
          rel="noopener"
        >
          <font-awesome
            :icon="['fab', 'twitter']"
            size="2x"
            class="text-white"
          />
        </a>
        <a
          href="https://facebook.com/theforeignarchitect"
          class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
          target="_blank"
          alt="Facebook Page"
          aria-label="Open my Facebook Page"
          rel="noopener"
        >
          <font-awesome
            :icon="['fab', 'facebook']"
            size="2x"
            class="text-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/danrocha/"
          class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
          target="_blank"
          alt="Daniel da Rocha on LinkedIn"
          aria-label="Open my profile on Linkedin"
          rel="noopener"
        >
          <font-awesome
            :icon="['fab', 'linkedin']"
            size="2x"
            class="text-white"
          />
        </a>
        <a
          href="https://www.pinterest.de/theforeignarchitect/pins/"
          class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
          alt="@theForeignArchitect on Pinterest"
          target="_blank"
          aria-label="Open my profile on Pinterest"
          rel="noopener"
        >
          <font-awesome
            :icon="['fab', 'pinterest']"
            size="2x"
            class="text-white"
          />
        </a>
        <a
          href="https://www.instagram.com/danroc/"
          class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
          target="_blank"
          alt="@danroc on Instagram"
          aria-label="Open my profile on Instagram"
          rel="noopener"
        >
          <font-awesome
            :icon="['fab', 'instagram']"
            size="2x"
            class="text-white"
          />
        </a>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  guides: allGuide (filter: {chapter: {eq: 0}}, sortBy: "date", limit: 6 ){
    edges {
      node {
        id
        city
        coverImage (width: 500, height: 500, quality: 90)
        path
      }
    }
  }
  blog: allPost (limit:4){
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
import GuideMap from "~/components/GuideMap";
import HomeSection from "~/components/HomeSection";
import GuideGrid from "~/components/GuideGrid";
import BlogGrid from "~/components/BlogGrid";
export default {
  metaInfo: {
    title: "The Foreign Architect - Travel for architecture",
    meta: [
      {
        key: "og:description",
        name: "og:description",
        content: `Contemporary architecture city guides. Travel for architecture.`
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: `Contemporary architecture city guides. Travel for architecture.`
      },
      { key: "author", name: "author", content: "Daniel da Rocha" },
      {
        key: "description",
        name: "description",
        content:
          "Contemporary architecture city guides. Travel for architecture."
      },
      { name: "twitter:title", content: "The Foreign Architect" },
      { name: "twitter:site", content: "@theforeignarch" },
      { name: "twitter:creator", content: "@danrocc" },
      {
        name: "twitter:image",
        key: "twitter:image",
        content: `${process.env.GRIDSOME_IMGIX_URL}the-foreign-architect.jpg`
      },
      {
        name: "og:image",
        key: "og:image",
        content: `${process.env.GRIDSOME_IMGIX_URL}the-foreign-architect.jpg`
      }
    ]
  },
  components: {
    HomeSection,
    GuideMap,
    BlogGrid,
    GuideGrid
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 1rem;
}
@screen sm {
  .guide-grid,
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@screen md {
  .guide-grid,
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
@screen lg {
  .guide-grid,
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@screen xl {
  .guide-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/*
.stripe-shadow {
  @apply border-2;
}

.stripe-shadow::after {
  content: "";
  bottom: -.5rem;
  left: .5rem;
  right: -.5rem;
  top: .5rem;
} */
</style>
