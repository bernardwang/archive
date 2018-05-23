<template>
  <section class="root-window u-outline">
    <WindowBar/>
    <WindowEditor/>
  </section>
</template>

<script>
import WindowBar from "~/components/WindowBar.vue"
import WindowEditor from "~/components/WindowEditor.vue"

export default {
  name: "Window",
  components: { WindowBar, WindowEditor }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-window {
  position: relative;
  width: 40rem;
  padding: 0.75rem;
  padding-top: 0;
  background-color: $cl-white;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0.75rem;
    left: 0.75rem;
    background-color: $cl-text-secondary;
    z-index: $z-neg-first;
  }
}
</style>
