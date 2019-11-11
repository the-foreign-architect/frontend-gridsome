<template>
  <nav class="pt-4 mb-8 border-t border-b border-black mt-8">
    <p class="font-bold mb-2">{{intro.title}}</p>
    <ul class="list-none">
      <li v-for="part in allChapters" :key="part.chapter" class="mb-2">
        <span v-if="part.chapter === 0" class="flex items-start">
          <span class="w-6"><font-awesome icon="arrow-left" size="xs"/></span>
          <g-link :to="part.path">Introduction</g-link>
        </span>
        <span v-else-if="part.chapter === currentChapter" class="flex items-start">
          <span  class="w-6"><font-awesome icon="arrow-down" size="xs"/></span>
          <span>Part {{part.chapter}} - {{part.title}}</span>
        </span>
        <span v-else class="flex items-start">
          <span  v-if="part.chapter > currentChapter" class="w-6"><font-awesome icon="arrow-right" size="xs"/></span>
          <span  v-else class="w-6"><font-awesome icon="arrow-left" size="xs"/></span>
          <span>
            <g-link :to="part.path">
              Part {{part.chapter}} - {{part.title}}
            </g-link>
          </span>
        </span>
      </li>
    </ul>
  </nav>
  <!-- <nav class="pt-4 mb-8 italic border-t border-b border-black font-bold">
    <div class="flex justify-between">
      <div class="w-1/3">
        <p v-if="prev"><span class="font-bold">&laquo;&nbsp;</span><g-link :to="prev.path">{{prev.chapter === 0 ? "Intro" : `Part ${prev.chapter}`}}</g-link></p>
      </div>
      <div class="w-1/3">
        <p v-if="prev.chapter !== 0" class="text-center"><g-link :to="intro.path">Intro</g-link></p>
      </div>
      <div class="w-1/3">
        <p v-if="next" class="text-right" ><g-link :to="next.path">Part {{next.chapter}}</g-link><span class="font-bold">&nbsp;&raquo;</span></p>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: 'SeriesNavigation',
  props: {
    chapters: {
      type: Array,
      default: () => []
    },
    currentChapter: {
      type: Number,
      default: 0
    },
    totalChapters: {
      type: Number,
      default: 0
    },
  },
  computed: {
    intro() {
      return this.chapters.find(chapter => chapter.chapter === 0);
    },
    prev() {
      if (this.currentChapter > 0) {
        return this.chapters.find(ch => ch.chapter === this.currentChapter - 1);
      }
      return null;
    },
    next() {
      if (this.currentChapter < this.totalChapters-1) {
        return this.chapters.find(ch => ch.chapter === this.currentChapter+1);
      }
      return null;
    },
    allChapters() {
      return this.chapters.sort((a, b)=> a.chapter - b.chapter)
    }
  }
}
</script>

<style scoped>
ul {
  @apply list-none;
}
</style>
