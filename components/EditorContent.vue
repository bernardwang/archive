<template>
  <main class="root-content">
    <ContentIntro/>
  </main>
</template>

<script>
import ContentIntro from "~/components/ContentIntro.vue"

export default {
  name: "EditorContent",
  components: { ContentIntro }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-content {
  padding: 0.75rem;
}
</style>
