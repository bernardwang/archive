<template>
  <div class="root-startbar u-outline">
    <Button :iconSrc="SquiggleLong" class="startbar-start" anim="small" variant="outline"/>
    <transition name="fade">
      <Button v-if="$store.state.windowStatus === 'hide'" :onClick="showWindow" anim="med" variant="outline" class="startbar-hidden">
        archive.txt
      </Button>
    </transition>
    <div class="startbar-time u-outline">
      <img :src="CircleIcon" class="startbar-icon">
      <img :src="SquareIcon" class="startbar-icon">
      <img :src="TriangleIcon" class="startbar-icon">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from "~/components/core/Button.vue"
import SquiggleLong from "~/assets/bar-squiggle2.svg"
import SquareIcon from "~/assets/panel-square.svg"
import TriangleIcon from "~/assets/panel-triangle.svg"
import CircleIcon from "~/assets/panel-circle.svg"

export default {
  name: "StartBar",
  components: { Button },
  data: function() {
    return {
      SquiggleLong,
      SquareIcon,
      TriangleIcon,
      CircleIcon,
    }
  },
  methods: mapActions([ 'showWindow' ])
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-startbar {
  position: absolute;
  width: 100vw;
  height: 2rem;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: $cl-white;

  @include bp-down(small) {
    display: none;
  }
}
.startbar-start {
  height: 100%;
  padding: 0 0.5rem 0 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.startbar-hidden {
  height: calc(100% - 0.75rem);
  padding: 0 1rem 0 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  transition: opacity 0.3s;
  opacity: 0;
}
.startbar-time {
  padding: 0 0.5rem 0 .5rem;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  position: absolute;
  right: 0;
}
.startbar-icon {
  padding: 0 0.25rem 0 0.25rem;
}
</style>
