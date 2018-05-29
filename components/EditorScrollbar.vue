<template>
  <div class="root-scrollbar">
    <Button :iconSrc="UpIcon" :onClick="scrollUp" variant="outline" anim="med" label="Scroll Up" class="scrollbar-btn scrollbar-btn-up"/>
    <Button :iconSrc="DownIcon" :onClick="scrollDown" variant="outline" anim="med" label="Scroll Down" class="scrollbar-btn scrollbar-btn-down"/>
  </div>
</template>

<script>
import Button from "~/components/core/Button"
import UpIcon from "~/assets/scroll-up.svg"
import DownIcon from "~/assets/scroll-down.svg"

export default {
  name: "EditorScrollbar",
  components: { Button },
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

.root-scrollbar {
}
.root-scrollbar .scrollbar-btn {
  z-index: $z-first;
  position: absolute;
  right: 0;
  width: 17px;
  height: 17px;
}
.scrollbar-btn-down {
  bottom: 0;
}
.scrollbar-btn-up {
  top: 0;
}
</style>
