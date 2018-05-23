<template>
  <section class="root-editor u-outline">
    <EditorPanel/>
    <EditorContent/>
    <button class="editor-btn editor-btn-down u-outline">
      <img :src="ArrowIcon" class="editor-btn-icon">
    </button>
    <button class="editor-btn editor-btn-up u-outline">
      <img :src="ArrowIcon" class="editor-btn-icon editor-rev-arrow">
    </button>
  </section>
</template>

<script>
import EditorPanel from "~/components/EditorPanel.vue"
import EditorContent from "~/components/EditorContent.vue"
import ArrowIcon from "~/assets/scroll-arrow3.svg"

export default {
  name: "WindowEditor",
  components: { EditorPanel, EditorContent },
  data: function() {
    return { ArrowIcon }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-editor {
  position: relative;
}
.editor-btn {
  z-index: $z-second;
  position: absolute;
  right: 0;
  width: 17px;
  height: 17px;
  background-color: white;
  border: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.editor-btn-down {
  top: 29px;
}
.editor-btn-up {
  bottom: 0;
}
.editor-rev-arrow {
  transform: rotate(180deg);
}
.editor-btn-icon {
  width: 100%;
}
</style>
