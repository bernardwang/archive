<template>
  <section class="root-bar">
    <div class="bar-title">
      <img :src="squiggle" class="bar-squiggle" alt>
    </div>
    <div class="bar-actions">
      <Button :iconSrc="CloseIcon" :onClick="emitRemoveDog" anim="large" variant="outline" label="Close Window" class="bar-btn"/>
    </div>
  </section>
</template>

<script>
import Button from "~/components/core/Button"
import SquiggleShort from "~/assets/bar-squiggle1.svg"
import SquiggleLong from "~/assets/bar-squiggle2.svg"
import CloseIcon from "~/assets/bar-close.svg"

export default {
  name: "DogWindowBar",
  components: { Button },
  props: {
    "dog": {
      type: Object,
      required: true,
    }
  },
  data: function() {
    return {
      SquiggleShort,
      SquiggleLong,
      CloseIcon
    }
  },
  computed: {
    squiggle: function () {
      // TODO: make dynamic
      console.log(this.dog.squiggleIndex)
      if (this.dog.squiggleIndex === 0) {
        return SquiggleShort
      } else {
        return SquiggleLong
      }
    }
  },
  methods: {
    emitRemoveDog: function () {
      this.$emit('removeDog')
    },
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.root-bar {
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
.bar-title {
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
}
.bar-squiggle {
  height: 23px;
  &:first-child {
    @include bp-down(small) {
      display: none;
    }
  }
}
.bar-actions {
  display: flex;
  justify-content: flex-end;
}
.bar-actions .bar-btn {
  width: 30px;
  height: 30px;
  padding: 4px;
  justify-content: flex-end;
}
</style>
