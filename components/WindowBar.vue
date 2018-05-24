<template>
  <section class="root-bar">
    <div class="bar-title">
      <img :src="SquiggleShort" class="bar-squiggle" alt>
      <img :src="SquiggleLong" class="bar-squiggle" alt>
    </div>
    <div class="bar-actions">
      <Button variant="outline" label="Hide Window" class="bar-btn">
        <img :src="HideIcon" class="bar-btn-icon" alt>
      </Button>
      <Button variant="outline" label="Expand Window" class="bar-btn">
        <img :src="ExpandIcon" class="bar-btn-icon" alt>
      </Button>
      <Button variant="outline" label="Close Window" class="bar-btn">
        <img :src="CloseIcon" class="bar-btn-icon" alt>
      </Button>
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

  //&:before {
  //  content: "";
  //  position: absolute;
  //  width: 100%;
  //  height: 100%;
  //  top: 0;
  //  left: 0;
  //  transform: translate(3px, 3px);
  //  background-color: $cl-text-secondary;
  //  z-index: $z-neg-first;
  //  @extend .u-outline;
  //}

  //&:hover {
  //  z-index: $z-first;
  //  transform: translate(-3px, -3px);
  //}
}
.bar-btn-icon {
  width: 100%;
}
</style>
