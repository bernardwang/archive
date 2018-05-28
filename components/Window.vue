<template>
  <section :class="classObj">
    <WindowBar/>
    <WindowPanel/>
    <WindowEditor/>
  </section>
</template>

<script>
import WindowBar from "~/components/WindowBar.vue"
import WindowPanel from "~/components/WindowPanel.vue"
import WindowEditor from "~/components/WindowEditor.vue"

export default {
  name: "Window",
  components: { WindowBar, WindowPanel, WindowEditor },
  computed: {
    classObj: function () {
      return {
        "root-window": true,
        "u-outline": true,
        "hide": this.$store.state.windowStatus === "hide",
        "expand": this.$store.state.windowStatus === "expand",
        "close": this.$store.state.windowStatus === "close"
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-window {
  position: relative;
  width: 40rem;
  height: 80vh;
  padding: 0.75rem;
  padding-top: 0;
  margin: -0.5rem 0 0 -0.5rem;
  margin-top: -7vh; // magic number
  background-color: $cl-white;

  @include breakpoint(medium) {
    width: calc(100vw - 3rem);
    height: calc(100vh - 6rem); // magic number
  }

  @extend .u-shadow;
  &:before {
    top: 0.75rem;
    left: 0.75rem;
  }
}

.hide {
  z-index: $z-neg-second;
  opacity: 0;
  transform: translate(-40vw, 80%) scale(0);
  @include breakpoint(medium) {
    transform: translate(-20vw, 80%) scale(0);
  }
  transition: transform 0.5s, opacity 0.5s;
  &:before {
    content: none;
  }
}

.expand {
  width: calc(100vw - 3rem);
  height: calc(100vh - 6rem);
}

.close {
  display: none;
}
</style>
