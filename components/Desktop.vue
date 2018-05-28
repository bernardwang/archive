<template>
  <div class="root-desktop">
    <div class="desktop-container">
      <Button :onClick="showWindow" label="Show archive.txt" class="desktop-shortcut">
        <pre class="shortcut-icon ascii">
____
|__\|
|__ |
|___|
        </pre>
        <figcaption class="shortcut-caption">
          archive.txt
        </figcaption>
      </Button>
      <Button class="desktop-shortcut">
        <a href="https://github.com/bernardwang" target="_blank" class="github-link">
          <pre class="shortcut-icon ascii">

.^--^.
( 0.0 )
//\\\\
          </pre>
          <figcaption class="shortcut-caption">
            github
          </figcaption>
        </a>
      </Button>
      <Button class="desktop-shortcut">
        <pre class="shortcut-icon ascii">
   __
 (__()'`;
 /___ /`
\\  \\
        </pre>
        <figcaption class="shortcut-caption">
          dog pics
        </figcaption>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from "~/components/core/Button.vue"

export default {
  name: "Desktop",
  components: { Button },
  methods: mapActions([ 'showWindow' ])
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";
.root-desktop {
  position: absolute;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    background-image: url("~/static/dots-pink.svg");
    background-size: 8px 8px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: $z-lowest;
  }
}
.desktop-container {
  width: 10rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.desktop-container .desktop-shortcut {
  margin: 0.5rem;
  text-align: center;
  background-color: transparent;
  &:hover {
    .shortcut-caption {
      text-decoration: underline;
    }
  }
}
.shortcut-icon {
  color: $cl-text-secondary;
  line-height: 1;
  letter-spacing: -2px;
}
.shortcut-caption {
  font-size: 0.9rem;
  margin-top: -0.5rem;
}
.desktop-container .github-link {
  text-decoration: none;
}
</style>
