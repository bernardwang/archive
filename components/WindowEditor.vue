<template>
  <section class="root-editor u-outline">
    <EditorPanel/>
    <EditorContent/>
  </section>
</template>

<script>
import EditorPanel from "~/components/EditorPanel.vue"
import EditorContent from "~/components/EditorContent.vue"

export default {
  name: "WindowEditor",
  components: { EditorPanel, EditorContent }
}
</script>

<style scoped lang="scss">
.root-editor {
  margin: 1rem;
}
</style>
