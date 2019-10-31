<template>
  <div>
    <iframe :title="title" :src="map" width="100%" height="500" class="my-4"></iframe>
  </div>
</template>

<script>
  export default {
name: 'GuideMap',
  props: {
    map: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'map',
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>
