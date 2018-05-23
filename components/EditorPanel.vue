<template>
  <section class="root-panel u-outline">
    <div class="panel-btns">
      <button class="panel-btn">
        <img :src="SquareIcon" class="panel-icon">
      </button>
      <button class="panel-btn">
        <img :src="TriangleIcon" class="panel-icon">
      </button>
      <button class="panel-btn">
        <img :src="CircleIcon" class="panel-icon">
      </button>
      <button class="panel-btn">
        <img :src="SquareIcon" class="panel-icon">
      </button>
    </div>
    <div class="panel-btns">
      <button class="panel-btn">
        <img :src="ArrowIcon" class="panel-icon">
      </button>
      <button class="panel-btn">
        <img :src="ArrowIcon" class="panel-icon panel-right-arrow">
      </button>
    </div>
    <div class="panel-btns">
      <button class="panel-btn">
        <img :src="XIcon" class="panel-icon">
      </button>
      <button class="panel-btn">
        <img :src="SquareIcon" class="panel-icon">
      </button>
      <button class="panel-btn">
        <img :src="CircleIcon" class="panel-icon">
      </button>
    </div>
  </section>
</template>

<script>
import SquareIcon from "~/assets/panel-square.svg"
import TriangleIcon from "~/assets/panel-triangle.svg"
import CircleIcon from "~/assets/panel-circle.svg"
import ArrowIcon from "~/assets/panel-arrow.svg"
import XIcon from "~/assets/panel-x.svg"

export default {
  name: "EditorPanel",
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
  margin-left: 2px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    @extend .u-outline;
  }
}
.panel-icon {
  width: 100%;
}
.panel-right-arrow {
  transform: rotate(180deg);
}
</style>
