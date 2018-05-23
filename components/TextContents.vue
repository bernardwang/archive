<template>
  <section class="root-contents">
    <h2 class="contents-banner">
      ===========================================================<br>Contents<br>
      ===========================================================
    </h2>
    <nav class="contents-nav">
      <ul class="contents-nav-menu">
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [1]
          </h4>
          <router-link class="contents-nav-link" to="#hibiscus">
            Hibiscus (2017 - present)
          </router-link>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [2]
          </h4>
          <router-link class="contents-nav-link" to="#stars">
            Stars (2015 - 2017)
          </router-link>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [3]
          </h4>
          <router-link class="contents-nav-link" to="#paper">
            Paper (2014)
          </router-link>
        </li>
        <li class="contents-nav-item">
          <h4 class="contents-nav-num">
            [4]
          </h4>
          <router-link class="contents-nav-link" to="#bubble">
            Bubble (2013)
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "TextContents"
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-contents {
  padding-top: 4rem;
}
.contents-banner {
  margin-bottom: 3rem;
  text-align: center;
}
.contents-nav {
  width: 100%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contents-nav-menu {
  width: 100%;
}
.contents-nav-item {
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contents-nav-num {
  margin-right: 1rem;
}
.contents-nav-link {
  &:hover {
    text-decoration: underline;
    color: $cl-text-secondary;
  }
}
</style>
