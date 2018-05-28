<template>
  <BannerSection id="contents" title="Contents">
    <nav class="section-content">
      <ul class="contents-nav-main">
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [1]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#about')">
            About
          </a>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [2]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#sites')">
            Sites
          </a>
        </li>
      </ul>
      <ul class="contents-nav-sub">
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [a]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#hibiscus')">
            Hibiscus (2017 - present)
          </a>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [b]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#stars')" >
            Stars (2015 - 2017)
          </a>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [c]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#paper')">
            Paper (2014)
          </a>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [d]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#bubble')">
            Bubble (2013)
          </a>
        </li>
      </ul>
      <ul class="contents-nav-main">
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [3]
          </h4>
          <a class="contents-nav-link" @click="scrollTo('#credit')">
            Credits
          </a>
        </li>
      </ul>
    </nav>
  </BannerSection>
</template>

<script>
import BannerSection from "~/components/BannerSection.vue"

export default {
  name: "TextContents",
  components: { BannerSection },
  methods: {
    scrollTo: function (hash) {
      const linkElem = document.querySelector(hash)
      if (linkElem) {
        linkElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";
.contents-nav-main {
  width: 100%;
}
.contents-nav-sub {
  width: 100%;
  margin-left: 3rem;
}
.contents-nav-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contents-nav-num {
  margin-right: 1rem;
}
</style>
