<template>
  <BannerSection id="credits" title="Credits">
    <footer class="credits-content section-content">
      <h3>
        You made it!
      </h3>
      <br>
      <p>
        I hope you had a good laugh looking through the evolution of my personal site.
        <br><br>
        Thank you to all the wonderful people who I have learned from, hacked with, and who have supported me throughout my web development journey.
        <br><br>
        ♥♥♥
      </p>
    </footer>
  </BannerSection>
</template>

<script>
import BannerSection from "~/components/BannerSection.vue"

export default {
  name: "TextCredits",
  components: { BannerSection }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";
.credits-content {
  align-items: flex-start;
}
</style>
