<template>
  <div id="app" class="app">
    <Window/>
    <StartBar/>
  </div>
</template>

<script>
import Window from "~/components/Window.vue"
import StartBar from "~/components/StartBar.vue"

export default {
  components: { Window, StartBar }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";
.app {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $primary-typeface;
  overflow: hidden;

  &:before {
    content: "";
    background-image: url("~/static/dots-pink.svg");
    background-size: 8px 8px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: $z-lowest;
  }
}
</style>
