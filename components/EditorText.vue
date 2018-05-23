<template>
  <main class="root-text">
    <TextIntro/>
    <TextAbout/>
    <TextContents/>
  </main>
</template>

<script>
import TextIntro from "~/components/TextIntro.vue"
import TextAbout from "~/components/TextAbout.vue"
import TextContents from "~/components/TextContents.vue"

export default {
  name: "EditorText",
  components: { TextIntro, TextAbout, TextContents }
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
  max-height: 75vh;
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
