<template>
  <main class="root-text">
    <TextIntro/>
    <TextContents/>
    <TextAbout/>
    <TextSites/>
    <TextCredits/>
  </main>
</template>

<script>
import TextIntro from "~/components/TextIntro.vue"
import TextContents from "~/components/TextContents.vue"
import TextAbout from "~/components/TextAbout.vue"
import TextSites from "~/components/TextSites.vue"
import TextCredits from "~/components/TextCredits.vue"

export default {
  name: "EditorText",
  components: {
    TextIntro,
    TextContents,
    TextAbout,
    TextSites,
    TextCredits
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-text {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 1px;
  padding: 0.75rem;
  height: 75vh;
  @include breakpoint(medium) {
    height: 84vh;
  }
}
.root-text::-webkit-scrollbar {
  width: 1.2rem;
  background: transparent;
  z-index: $z-neg-first;
}
.root-text::-webkit-scrollbar-track {
  background: transparent;
}
.root-text::-webkit-scrollbar-thumb {
  width: 1.2rem;
  border: 2px solid $cl-text-secondary;
  border-right: 0px;
}
</style>
