<template>
  <main id="text" class="root-text">
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
  margin-top: 2px;
  padding: 0 0.75rem 0 0.75rem;
  height: 100%;
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
  cursor: pointer;
  border: 2px solid $cl-text-secondary;
  border-right: 0px;
}
</style>
