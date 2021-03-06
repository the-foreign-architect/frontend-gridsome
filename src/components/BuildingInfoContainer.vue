<template>
  <div  class="mb-10">
    <article
      v-if="building"
      :id="'building-info-' + building.id"
      class="w-full p-4 mt-8 mb-2 border-2 border-black building-info"
    >
      <section class="w-full h-64 pb-4">
        <ClientOnly>
          <google-map :location="{ lat: building.lat, lng: building.lng }" class="w-full h-full"/>
        </ClientOnly>
        <p class="text-xs text-right" v-if="building.gmapsLink">
          <a :href="building.gmapsLink" target="_blank" alt="Google Maps Link"
            >open on Google Maps</a
          >
        </p>
      </section>
      <div class=" sm:pr-2">
        <section class="mb-4">
          <h5 class="text-xl font-bold">
            <g-link v-if="building.website" :to="building.website">{{
              building.name
            }}</g-link>
            <span v-else>{{ building.name }}</span>
          </h5>
          <ul class="flex flex-wrap">
            <li
              v-for="({ architect }, index) in building.architectBuildings
                .nodes"
              :key="architect.id"
            >
              <a v-if="architect.website" :href="architect.website">{{
                architect.name
              }}</a>
              <span v-else>{{ architect.name }}</span
              ><span v-if="index < building.architectBuildings.nodes.length - 1"
                >,&nbsp;</span
              >
            </li>
          </ul>
        </section>
        <section class="mb-4">
          <ul>
            <li v-if="building.year">{{ building.year }}</li>
            <li v-if="building.typology">{{ building.typology }}</li>
            <li v-if="buildingData">{{ buildingData }}</li>
          </ul>
        </section>
        <section v-if="building.links.nodes.length > 0">
          <ul>
            <li
              v-for="link in building.links.nodes"
              :key="link.id"
              class="pb-1 leading-tight"
            >
              <a :href="link.url" class="mr-1">
                <span v-if="link.title">{{ link.title }}</span
                ><span v-else>{{ link.source.name }}</span></a
              >
              <span
                v-if="
                  link.source &&
                    link.source.name.toLowerCase() !== link.title.toLowerCase()
                "
                class="text-xs"
                >{{ link.source.name }}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </article>
    <back-to-top v-if="showBackToTop" anchor="#buildings" />
  </div>
</template>

<script>
import lazyLoadComponent from '~/plugins/lazy-load-component';
import BackToTop from "~/components/BackToTop";
import PlaceholderMap from "~/components/PlaceholderMap";

export default {
  name: "BuildingInfoBox",
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    showBackToTop: {
      type: Boolean,
      default: true
    }
  },
  components: {
    BackToTop,
    GoogleMap: lazyLoadComponent({
      componentFactory: () => import('./GoogleMap.vue'),
      loading: PlaceholderMap,
    }),
  },
  data() {
    return {
      building: null,
      buildingData: null
    };
  },
  mounted() {
    this.building = require(`../data/building-${this.id}.json`);
    const gfa =
      this.building.gfa > 0
        ? `${Number(this.building.gfa).toLocaleString()}sqm`
        : null;
    const height =
      this.building.height > 0
        ? `${Number(this.building.height).toLocaleString()}m`
        : null;
    this.buildingData = [gfa, height].filter(Boolean).join(" / ");
  }
};
</script>

<style scoped>
.building-info p {
  @apply m-0;
}
.building-info ul {
  @apply list-none m-0;
}

.building-info ul > li {
  @apply m-0;
}
</style>
