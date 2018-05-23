<template>
  <main class="root-content">
    <ContentIntro/>
    <ContentAbout/>
  </main>
</template>

<script>
import ContentIntro from "~/components/ContentIntro.vue"
import ContentAbout from "~/components/ContentAbout.vue"

export default {
  name: "EditorContent",
  components: { ContentIntro, ContentAbout }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-content {
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 1px;
  padding: 0.75rem;
  max-height: 75vh;
}
.root-content::-webkit-scrollbar {
  width: 1.2rem;
  background: transparent;
  z-index: $z-neg-first;
}
.root-content::-webkit-scrollbar-track {
  background: transparent;
}
.root-content::-webkit-scrollbar-thumb {
  width: 1.2rem;
  border: 2px solid $cl-text-secondary;
  border-right: 0px;
}
</style>
