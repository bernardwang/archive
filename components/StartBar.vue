<template>
  <div class="root-startbar u-outline">
    <Button :iconSrc="SquiggleShort" anim="small" variant="outline" class="startbar-start"/>
    <transition name="fade">
      <Button v-if="$store.state.windowStatus === 'hide'" :onClick="hideWindow" anim="med" variant="outline" class="startbar-hidden">
        archive.txt
      </Button>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from "~/components/core/Button.vue"
import SquiggleShort from "~/assets/bar-squiggle1.svg"

export default {
  name: "StartBar",
  components: { Button },
  data: function() {
    return {
      SquiggleShort
    }
  },
  methods: mapActions([ 'hideWindow' ])
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

  @include breakpoint(small) {
    display: none;
  }
}
.startbar-start {
  height: 100%;
  padding: 0 1.5rem 0 1.5rem;
  margin-right: 0.5rem;
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
</style>
