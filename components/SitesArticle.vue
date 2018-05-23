<template>
  <article :id="site.id" class="sites-article">
    <h3 class="article-title">
      [{{ alphabet[index] }}]
      <a :href="site.url" target="_blank"> {{ site.title }} </a>
    </h3>
    <div class="article-overview">
      <pre class="article-map ascii">
        {{ site.ascii }}
      </pre>
      <p class="article-desc">
        <a :href="site.url" target="_blank">Visit Site</a><br>
        Date: {{ site.date }} <br>
        Technologies: {{ site.tech }}<br>
      </p>
    </div>
    <p class="article-detail">
      {{ site.detail }}
    </p>
  </article>
</template>

<script>
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

export default {
  name: "SitesArticle",
  props: {
    "index": {
      type: Number,
      required: true
    },
    "site": {
      type: Object,
      required: true
    },
  },
  data: function () {
    return { alphabet }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.sites-article {
  width: 100%;
  margin-bottom: 3rem;
}
.article-title {
  margin-bottom: 0.5rem;
}
.article-overview {
  display: flex;
}
.article-map {
  margin-right: 1rem;
  letter-spacing: 0px;
  line-height: 1;
}
.article-desc {
  margin-top: 1.5rem;
}
</style>
