<template>
  <div id="app" class="app">
    <Desktop/>
    <Window/>
    <StartBar/>
  </div>
</template>

<script>
import Desktop from "~/components/Desktop.vue"
import Window from "~/components/Window.vue"
import StartBar from "~/components/StartBar.vue"

export default {
  components: { Desktop, Window, StartBar }
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
}
</style>
