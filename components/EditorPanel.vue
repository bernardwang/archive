<template>
  <section class="root-panel u-outline">
    <div class="panel-btns">
      <Button class="panel-btn">
        <img :src="SquareIcon" class="panel-icon" alt>
      </Button>
      <Button class="panel-btn">
        <img :src="TriangleIcon" class="panel-icon" alt>
      </Button>
      <Button class="panel-btn">
        <img :src="CircleIcon" class="panel-icon" alt>
      </Button>
      <Button class="panel-btn">
        <img :src="SquareIcon" class="panel-icon" alt>
      </Button>
    </div>
    <div class="panel-btns">
      <Button class="panel-btn">
        <img :src="ArrowIcon" class="panel-icon" alt>
      </Button>
      <Button class="panel-btn">
        <img :src="ArrowIcon" class="panel-icon panel-rev-arrow">
      </Button>
    </div>
    <div class="panel-btns">
      <Button class="panel-btn">
        <img :src="XIcon" class="panel-icon" alt>
      </Button>
      <Button class="panel-btn">
        <img :src="SquareIcon" class="panel-icon" alt>
      </Button>
      <Button class="panel-btn">
        <img :src="CircleIcon" class="panel-icon" alt>
      </Button>
    </div>
  </section>
</template>

<script>
import Button from "~/components/core/Button"
import SquareIcon from "~/assets/panel-square.svg"
import TriangleIcon from "~/assets/panel-triangle.svg"
import CircleIcon from "~/assets/panel-circle.svg"
import ArrowIcon from "~/assets/panel-arrow.svg"
import XIcon from "~/assets/panel-x.svg"

export default {
  name: "EditorPanel",
  components: { Button },
  data: function() {
    return {
      SquareIcon,
      TriangleIcon,
      CircleIcon,
      ArrowIcon,
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
}
.panel-btns {
  margin-left: 0.3rem;
  display: flex;
  justify-content: flex-start;
}
.panel-btn {
  width: 27px;
  height: 27px;
  &:hover {
    @extend .u-outline;
  }
}
.panel-icon {
  width: 100%;
}
.panel-rev-arrow {
  transform: rotate(180deg);
}
</style>
