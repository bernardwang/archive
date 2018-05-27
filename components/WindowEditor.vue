<template>
  <section class="root-editor u-outline">
    <EditorPanel/>
    <EditorText/>
    <Button :iconSrc="UpIcon" variant="outline" anim="med" label="Scroll Down" class="editor-btn editor-btn-down"/>
    <Button :iconSrc="DownIcon" variant="outline" anim="med" label="Scroll Up" class="editor-btn editor-btn-up"/>
  </section>
</template>

<script>
import Button from "~/components/core/Button"
import EditorPanel from "~/components/EditorPanel.vue"
import EditorText from "~/components/EditorText.vue"
import UpIcon from "~/assets/scroll-up.svg"
import DownIcon from "~/assets/scroll-down.svg"

export default {
  name: "WindowEditor",
  components: { Button, EditorPanel, EditorText },
  data: function() {
    return { UpIcon, DownIcon }
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
  top: 27px;
}
.editor-btn-up {
  bottom: 0;
}
</style>
