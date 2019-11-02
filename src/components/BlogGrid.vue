<template>
  <div class="grid blog-grid">
    <div v-for="{node} in posts" :key="node.id"
      class="border-2 border-black flex items-center"
    >
      <g-image :src="node.coverImage" class="w-24 h-24 lg:h-32 lg:w-32 xl:w-48 xl:h-48"/>
      <div class="px-4 sm:pr-6">
        <p class="text-xs uppercase">{{node.date | formatDate("dd.MMM")}}</p>
        <h3 class="font-bold leading-none">{{node.title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogGrid",
    props: {
      posts: {
        type: Array,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
