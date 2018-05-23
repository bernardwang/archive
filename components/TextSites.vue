<template>
  <BannerSection id="sites" title="Sites">
    <div class="section-content">
      <article id="hibiscus" class="sites-article">
        <h3 class="sites-title">
          [a]  V4 - Hibiscus
        </h3>
        <div class="sites-overview">
          <pre class="sites-map ascii">
╔═════════════════════════╗
║                         ║
║ ⌂                       ║
║ ░░░     ░░░░░░░░░░      ║
║ ░░░     ░░▓▓▓▓▓░░░░     ║
║         ▓▓▓░░░░         ║
║                         ║
║         ░░░             ║
║                         ║
║                         ║
║         ▓▓              ║
║     ░░░ ░░░░░░ ░░░░░░   ║
║         ░░░░░░ ░░░░░    ║
╚═════════════════════════╝
          </pre>
          <p>
            <a href="http://www.bernard.wang" target="_blank">Visit Site</a><br>
            Date: 2017 - Present <br>
            Technologies: Vue.js, Webpack, Pug, Tachyons<br>
          </p>
        </div>
        <p>
          longer description
        </p>
      </article>
      <article id="stars" class="sites-article">
        <h3 class="sites-title">
          [b]  V3 - Stars
        </h3>
        <div class="sites-overview">
          <pre class="sites-map ascii">
╔═════════════════════════╗
║ ∙    ∙        ∙ ∙  ∙    ║
║       ∙            ∙   ∙║
║   ∙ ∙   ∙     ∙         ║
║            ∙    ∙    ∙  ║
║∙        ▓▓▓▓▓▓▓▓  ∙     ║
║    ∙    ∙░░░░░░       ∙ ║
║     ∙    ░░░░░░ ∙       ║
║        ∙  ░░░░   ∙      ║
║  ∙    ░░ ░░░ ░░∙░░░∙ ∙  ║
║ ∙    ∙                  ║
║        ∙     ∙    ∙     ║
║∙ ∙   ∙      ∙          ∙║
╚═════════════════════════╝
          </pre>
          <p>
            <a href="http://archive.bernard.wang/stars" target="_blank">Visit Site</a><br>
            Date: 2015 - 2017 <br>
            Technologies: HTML, SCSS, Gulp.js, D3.js (lol)<br>
          </p>
        </div>
        <p>
          longer description
        </p>
      </article>
      <article id="stars" class="sites-article">
        <h3 class="sites-title">
          [c]  V2 - Paper
        </h3>
        <div class="sites-overview">
          <pre class="sites-map ascii">
╔═════════════════════════╗
║                         ║
║                         ║
║     ┌──────┬──────┐     ║
║     │▓▓▓   │░░░░░ │     ║
║     │      │░░░░  │     ║
║     │      │░░    │     ║
║     │      │      │     ║
║     │░     │      │     ║
║     │░░    │░░░░  │     ║
║     └──────┴──────┘     ║
║                         ║
║                         ║
╚═════════════════════════╝
          </pre>
          <p>
            <a href="http://archive.bernard.wang/paper" target="_blank">Visit Site</a><br>
            Date: 2014<br>
            Technologies: HTML, SCSS, JQuery<br>
          </p>
        </div>
        <p>
          longer description
        </p>
      </article>
      <article id="stars" class="sites-article">
        <h3 class="sites-title">
          [d]  V1 - Bubble
        </h3>
        <div class="sites-overview">
          <pre class="sites-map ascii">
╔═════════════════════════╗
║                         ║
║                         ║
║                         ║
║           ░░░           ║
║          ░▓▓▓░          ║
║         ░▓▓▓▓▓░         ║
║          ░▓▓▓░          ║
║           ░░░           ║
║                         ║
║                         ║
║                         ║
║                         ║
╚═════════════════════════╝
          </pre>
          <p>
            <a href="http://archive.bernard.wang/paper" target="_blank">Visit Site</a><br>
            Date: 2013<br>
            Technologies: HTML, CSS, ALOT of JQuery<br>
          </p>
        </div>
        <p>
          longer description
        </p>
      </article>
    </div>
  </BannerSection>
</template>

<script>
import BannerSection from "~/components/BannerSection.vue"

export default {
  name: "TextSites",
  components: { BannerSection }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.sites-article {
  width: 100%;
  margin-bottom: 2rem;
}
.sites-title {
  margin-bottom: 1rem;
}
.sites-overview {
  display: flex;
}
.sites-map {
  margin-right: 1rem;
}
</style>
