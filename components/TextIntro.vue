<template>
  <header class="root-intro">
    <pre :class="asciiClass">
      {{ archive.ascii }}
    </pre>
    <div class="intro-title">
      <p>
        archive.bernard.wang<br>
        Version 1.3, Updated 05/08/18<br>
        by Bernard Wang &lt;Xxbern3rdxX@hotmail.com&gt;
      </p>
    </div>
  </header>
</template>

<script>
import archiveAscii from "~/src/js/archiveAscii.js"
const asciiIndex = Math.floor((Math.random() * archiveAscii.length))
const archive = archiveAscii[asciiIndex]

export default {
  name: "TextIntro",
  data: function () {
    return { archive }
  },
  computed: {
    asciiClass: function () {
      return {
        'ascii': true,
        'intro-ascii': true,
        'large-ascii': archive.large,
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-intro {
  padding: 3rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-title {
  margin-top: 1rem;
  text-align: center;
}
.intro-ascii {
  line-height: 0.8;
  @include bp-down(medium) {
    font-size: 0.7rem;
  }
  @include bp-down(small) {
    font-size: 0.5rem;
  }
}
.large-ascii {
  font-size: 0.8rem;
}
</style>
