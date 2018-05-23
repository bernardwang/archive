<template>
  <BannerSection id="sites" title="Sites">
    <div class="section-content">
      <SitesArticle v-for="(site, index) in sites" :key="site.id" :site="site" :index="index"/>
    </div>
  </BannerSection>
</template>

<script>
import sites from "~/src/js/sites.js"
import BannerSection from "~/components/BannerSection.vue"
import SitesArticle from "~/components/SitesArticle.vue"

export default {
  name: "TextSites",
  components: { BannerSection, SitesArticle },
  data: function () {
    return { sites }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";
</style>
