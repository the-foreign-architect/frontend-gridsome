<template>
  <figure class="full-width my-8">
    <div class="mx-auto" :class="format === 'v' ? 'max-w-sm' : 'max-w-2xl'">
      <img :src="url" :alt="alt" class="mx-auto border-2 border-black">
      <figcaption class="text-sm">{{ caption }}</figcaption>
    </div>
  </figure>
</template>
<script>
export default {
  props: {
    imgFile: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
    format: {
      type: String,
      default: 'h'
    }
  },
  computed: {
    url() {
      return (
        'https://res.cloudinary.com/tfa/image/upload/c_scale,h_800,q_auto:best/' +
        this.imgFile
      );
    },
  },
};
</script>
