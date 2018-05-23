<template>
  <section class="root-bar">
    <div class="bar-title">
      <img :src="SquiggleShort" class="bar-squiggle">
      <img :src="SquiggleLong" class="bar-squiggle">
    </div>
    <div class="bar-actions">
      <button class="bar-btn u-outline">
        <img :src="HideIcon" class="bar-btn-icon">
      </button>
      <button class="bar-btn u-outline">
        <img :src="ExpandIcon" class="bar-btn-icon">
      </button>
      <button class="bar-btn u-outline">
        <img :src="CloseIcon" class="bar-btn-icon">
      </button>
    </div>
  </section>
</template>

<script>
import SquiggleShort from "~/assets/bar-squiggle1.svg"
import SquiggleLong from "~/assets/bar-squiggle2.svg"
import HideIcon from "~/assets/bar-hide.svg"
import ExpandIcon from "~/assets/bar-expand.svg"
import CloseIcon from "~/assets/bar-close.svg"

export default {
  name: "WindowBar",
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
  height: 25px;
}
.bar-actions {
  display: flex;
  justify-content: flex-end;
}
.bar-btn {
  width: 35px;
  height: 35px;
  margin-left: 2px;
  padding: 0;
  padding-bottom: 6px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.bar-btn-icon {
}
</style>
