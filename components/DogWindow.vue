<template>
  <section :style="styleObj" class="root-dog u-outline">
    <DogWindowBar :dog="dog" @removeDog="removeDog(index)"/>
    <pre class="ascii dog-ascii u-outline">
      {{ dog.ascii }}
    </pre>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import DogWindowBar from "~/components/DogWindowBar.vue"

export default {
  name: "DogWindow",
  components: { DogWindowBar },
  props: {
    "dog": {
      type: Object,
      required: true,
    },
    "index": {
      type: Number,
      required: true,
    }
  },
  computed: {
    styleObj: function () {
      return {
        "top": this.dog.x + "vh",
        "left": this.dog.y + "vw",
      }
    }
  },
  methods: mapMutations([ 'removeDog' ])
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-dog {
  position: absolute;
  padding: 0.75rem;
  padding-top: 0;
  margin: -0.5rem 0 0 -0.5rem;
  background-color: $cl-white;
  z-index: $z-second;

  @extend .u-shadow;
}
.dog-ascii {
  font-size: 0.8rem;
  line-height: 0.8;
}
</style>
