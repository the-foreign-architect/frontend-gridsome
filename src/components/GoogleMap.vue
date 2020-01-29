<template>
  <div></div>
</template>

<script>
import gmapsInit from "../plugins/gmaps";
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  async mounted() {
    try {
      const location = this.location;
      const google = await gmapsInit();
      const map = new google.maps.Map(this.$el,
        {zoom: 17, center: location}
      );
      var marker = new google.maps.Marker({position: location, map: map});
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
