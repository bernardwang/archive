<template>
  <BannerSection title="About">
    <article class="section-content">
      <pre class="about-ascii">
       .........
     .'------.' |
    | .-----. | |
    | |     | | |
    | |     | | |;.
    |*`-----'.|.' `;
    `---------' .;'
  .''''////////;'
 / ######### /;/
/ ######### //
`-----------'
      </pre>
      <p class="about-desc">
        Since I first dove into web development in 2013, my personal site has been an important way for me to learn new technologies, experiment with different ideas, and work on a fun project. Over the years, I have revisited the design and content of my site several times. This archive serves as a record of those redesigns.
        <br><br>
        In a way, this is also a silly way to track my progress as a developer and designer. Have fun!
      </p>
    </article>
  </BannerSection>
</template>

<script>
import BannerSection from "~/components/BannerSection.vue"

export default {
  name: "TextAbout",
  components: { BannerSection }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.about-ascii {
  line-height: 0.8;
  letter-spacing: -1px;
  word-spacing: 0px;
  font-size: 1rem;
}
.about-desc {
  margin-top: 1rem;
}
</style>
