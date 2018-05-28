<template>
  <section class="root-editor u-outline">
    <EditorPanel/>
    <EditorText/>
    <Button :iconSrc="UpIcon" :onClick="scrollUp" variant="outline" anim="med" label="Scroll Up" class="editor-btn editor-btn-up"/>
    <Button :iconSrc="DownIcon" :onClick="scrollDown" variant="outline" anim="med" label="Scroll Down" class="editor-btn editor-btn-down"/>
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
  },
  methods: {
    scrollDown: function () {
      const textElem = document.getElementById("text")
      textElem.scrollBy({ top: 250, behavior: 'smooth' })
    },
    scrollUp: function () {
      const textElem = document.getElementById("text")
      textElem.scrollBy({ top: -250, behavior: 'smooth' })
    }
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
  bottom: 0;
}
.editor-btn-up {
  top: 27px;
}
</style>
