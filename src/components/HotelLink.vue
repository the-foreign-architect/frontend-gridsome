<template>
  <p class="text-right ">
    <a :href="link" target="_blank" class="px-3 py-2 text-white bg-black border-2 border-white shadow-lg hover:shadow" :alt="`Check ${name} on Booking.com`"
      >Check <strong>{{ name }}</strong> on Booking.com &rarr;</a
    >
  </p>
</template>

<script>
export default {
  name: "HotelLink",
  props: {
    name: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
  }
};
</script>

<style lang="scss" scoped></style>
