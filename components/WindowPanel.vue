<template>
  <section class="root-panel u-outline">
    <div class="panel-btns">
      <Button :iconSrc="SquareIcon" anim="small" class="panel-btn"/>
      <Button :iconSrc="TriangleIcon" anim="small" class="panel-btn"/>
      <Button :iconSrc="CircleIcon" anim="small" class="panel-btn"/>
      <Button :iconSrc="SquareIcon" anim="small" class="panel-btn"/>
    </div>
    <div class="panel-btns">
      <Button :iconSrc="LeftIcon" anim="small" class="panel-btn"/>
      <Button :iconSrc="RightIcon" anim="small" class="panel-btn"/>
    </div>
    <div class="panel-btns">
      <Button :iconSrc="XIcon" anim="small" class="panel-btn"/>
      <Button :iconSrc="SquareIcon" anim="small" class="panel-btn"/>
      <Button :iconSrc="CircleIcon" anim="small" class="panel-btn"/>
    </div>
  </section>
</template>

<script>
import Button from "~/components/core/Button"
import SquareIcon from "~/assets/panel-square.svg"
import TriangleIcon from "~/assets/panel-triangle.svg"
import CircleIcon from "~/assets/panel-circle.svg"
import LeftIcon from "~/assets/panel-left.svg"
import RightIcon from "~/assets/panel-right.svg"
import XIcon from "~/assets/panel-x.svg"

export default {
  name: "WindowPanel",
  components: { Button },
  data: function() {
    return {
      SquareIcon,
      TriangleIcon,
      CircleIcon,
      LeftIcon,
      RightIcon,
      XIcon
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-panel {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
}
.panel-btns {
  margin-left: 0.3rem;
  display: flex;
  justify-content: flex-start;
}
.panel-btn {
  width: 25px;
  height: 25px;
  &:hover {
    @extend .u-outline;
  }
}
.panel-icon {
  width: 100%;
}
</style>
