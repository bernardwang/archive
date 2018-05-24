<template>
  <section class="root-editor u-outline">
    <EditorPanel/>
    <EditorText/>
    <Button variant="outline" label="Scroll Down" class="editor-btn editor-btn-down">
      <img :src="ArrowIcon" class="editor-btn-icon" alt>
    </Button>
    <Button variant="outline" label="Scroll Up" class="editor-btn editor-btn-up">
      <img :src="ArrowIcon" class="editor-btn-icon editor-rev-arrow" alt>
    </Button>
  </section>
</template>

<script>
import Button from "~/components/core/Button"
import EditorPanel from "~/components/EditorPanel.vue"
import EditorText from "~/components/EditorText.vue"
import ArrowIcon from "~/assets/scroll-arrow3.svg"

export default {
  name: "WindowEditor",
  components: { Button, EditorPanel, EditorText },
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
.root-editor .editor-btn {
  z-index: $z-second;
  position: absolute;
  right: 0;
  width: 17px;
  height: 17px;
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
