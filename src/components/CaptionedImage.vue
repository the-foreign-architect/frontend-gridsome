<template>
  <figure class="flex flex-col items-center my-8">
      <img
        :srcset="srcset"
        :src="src"
        :sizes="sizes"
        class="border-2 border-black"
        loading="lazy"
      />
      <figcaption class="text-sm">{{ caption }}</figcaption>
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
