<template>
  <section class="root-bar">
    <div class="bar-title">
      <img :src="SquiggleShort" class="bar-squiggle" alt>
      <img :src="SquiggleLong" class="bar-squiggle" alt>
    </div>
    <div class="bar-actions">
      <Button :iconSrc="HideIcon" anim="large" variant="outline" label="Hide Window" class="bar-btn"/>
      <Button :iconSrc="ExpandIcon" anim="large" variant="outline" label="Expand Window" class="bar-btn"/>
      <Button :iconSrc="CloseIcon" anim="large" variant="outline" label="Close Window" class="bar-btn"/>
    </div>
  </section>
</template>

<script>
import Button from "~/components/core/Button"
import SquiggleShort from "~/assets/bar-squiggle1.svg"
import SquiggleLong from "~/assets/bar-squiggle2.svg"
import HideIcon from "~/assets/bar-hide.svg"
import ExpandIcon from "~/assets/bar-expand.svg"
import CloseIcon from "~/assets/bar-close.svg"

export default {
  name: "WindowBar",
  components: { Button },
  data: function() {
    return {
      SquiggleShort,
      SquiggleLong,
      HideIcon,
      ExpandIcon,
      CloseIcon
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-bar {
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.bar-title {
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
}
.bar-squiggle {
  height: 23px;
  &:first-child {
    @include breakpoint(small) {
      display: none;
    }
  }
}
.bar-actions {
  display: flex;
  justify-content: flex-end;
}
.bar-actions .bar-btn {
  width: 30px;
  height: 30px;
  padding: 4px;
  justify-content: flex-end;
}
</style>
