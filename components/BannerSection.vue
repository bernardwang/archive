<template>
  <section class="root-section">
    <h2 class="section-banner">
      ===========================================================
      <br>{{ title }}<br>
      ===========================================================
    </h2>
    <slot/>
  </section>
</template>

<script>
export default {
  name: "BannerSection",
  props: {
    "title": {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-section {
  padding-top: 4rem;
}
.section-banner {
  margin-bottom: 3rem;
  text-align: center;
}
</style>
