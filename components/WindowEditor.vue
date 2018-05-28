<template>
  <section class="root-editor u-outline">
    <EditorText/>
    <EditorScrollbar/>
  </section>
</template>

<script>
import EditorText from "~/components/EditorText.vue"
import EditorScrollbar from "~/components/EditorScrollbar.vue"

export default {
  name: "WindowEditor",
  components: { EditorText, EditorScrollbar },
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-editor {
  position: relative;
  height: calc(100% - 5rem);
}
</style>
