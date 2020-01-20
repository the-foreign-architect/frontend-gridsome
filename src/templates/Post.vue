<template>
  <Layout>
    <article>
      <header>
        <div class="stripe-shadow-black">
          <h1
            class="w-full px-4 pt-4 mb-2 text-2xl font-bold leading-tight tracking-wide text-white uppercase bg-black border-black "
          >
            {{ $page.post.title }}
          </h1>
          <p class="px-4 mb-4 text-xl">{{ $page.post.excerpt }}</p>
        </div>
      </header>
      <figure
        class="object-cover w-full h-full border-2 border-black header-image"
      >
        <g-image
          :src="$page.post.coverImage"
          class="object-cover w-full h-full"
        />
      </figure>

      <section class="content-page">
        <VueRemarkContent class="flow" />
      </section>
      <footer>
        <vue-disqus
          shortname="the-foreign-architect"
          :identifier="$page.post.title"
        ></vue-disqus>
      </footer>
    </article>
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
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.excerpt
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.excerpt
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.post.title
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.$page.post.coverImage.src
        },
        { key: "og:type", name: "og:type", content: "article" },
        { key: "og:title", name: "og:title", content: this.$page.post.title },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.post.excerpt
        },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.post.date
        },
        {
          key: "og:image",
          name: "og:image",
          content: this.$page.post.coverImage.src
        }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  }
};
</script>

<style scoped>
article {
  --article-max-width: 576px;
  @apply px-4 mb-12;
  display: grid;

  figure {
    @apply h-64;
    grid-row: 1;
  }
  header {
    @apply z-10;
    margin: 0 -2px;
    grid-row: 2;
  }
  section {
    @apply pt-8;
  }
  footer {
    @apply pt-12;
  }
}

@screen sm {
  article {
    grid-template-columns: 1fr calc(var(--article-max-width)/2) calc(var(--article-max-width)/2);
    grid-template-rows: 100px min-content 100px min-content min-content;

    figure {
      @apply h-full h-full;
      grid-column: 2 / -1;
      grid-row: 1 / 4;
    }
    header {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    section {
      grid-column: 2/-1;
      grid-row: 4;
    }
    footer {
      grid-column: 2/-1;
      grid-row: 5;
    }
  }
}

@screen lg {
  article {
    grid-template-columns: 1fr calc(var(--article-max-width)/2) calc(var(--article-max-width)/2) 1fr;

    section, footer {
      grid-column: 2 / 4;
    }
  }


}

</style>
