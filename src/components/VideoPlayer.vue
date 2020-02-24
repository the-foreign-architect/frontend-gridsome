<template>
  <div>
      <iframe
        id="`player-${id}`"
        type="text/html"
        width="560" height="349"
        :src="src"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    provider: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      if (this.provider === 'youtube') {
        return `https://www.youtube.com/embed/${
          this.id
        }?origin=https://theforeignarchitect.com`;
      } else if (this.provider === 'vimeo') {
        return `https://player.vimeo.com/video/${this.id}?color=ffffff`;
      }
    },
  },
};
</script>

<style scoped>
div {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
div iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
