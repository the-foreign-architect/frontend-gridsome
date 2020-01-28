<template>
  <figure class="my-8" :class="blog ? 'w-full' : 'full-width px-4'">
    <div class="mx-auto" :class="format === 'v' ? 'max-w-sm' : 'max-w-3xl'">
      <!-- <img
        :ix-path="imgFile"
        ix-params='{"fit": "max"}'
        ix-host="tfa.imgix.net"
        :sizes="sizes"
        :alt="alt"
        loading="lazy"
      /> -->
      <div>

      <img
        :srcset="srcset"
        :src="src"
        :sizes="sizes"
        class="mx-auto border-2 border-black"
        loading="lazy"
      />
      <figcaption class="text-sm">{{ caption }}</figcaption>
      </div>
      <!-- <img
        :src="url"
        :alt="alt"
        class="mx-auto border-2 border-black"
        loading="lazy"
      /> -->
    </div>
  </figure>
</template>
<script>
export default {
  props: {
    imgFile: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ""
    },
    format: {
      type: String,
      default: "h"
    },
    blog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizes() {
      if (this.format === "v") return "(max-width: 380px) 100vw, 380px";
      return "(max-width: 900px) 100vh, 900px";
    },
    srcset() {
      if (this.format === 'v') return `${this.url}&w=640 640w, ${this.url}&w=380 380w, ${this.url}&w=324 324w, ${this.url}&w=200 200w`
      return `${this.url}&w=1024 1024w, ${this.url}&w=768 768w, ${this.url}&w=640 640w, ${this.url}&w=375 375w,`
    },
    src() {
      if (this.format === 'v') return `${this.url}&w=380`
      return `${this.url}&w=900`
    },
    url() {
      return `${process.env.GRIDSOME_IMGIX_URL}/${this.imgFile}?fit=max&auto=format`.replace(
        /([^:])(\/\/+)/g,
        "$1/"
      );
    }
  }
};
</script>
