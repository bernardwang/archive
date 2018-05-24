<template>
  <button :class="classObj" :aria-label="label" @click="onClick" >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    "label": {
      type: String,
      required: false,
      default: ''
    },
    "variant": {
      type: String,
      required: false,
      default: ''
    },
    "to": {
      type: String,
      required: false,
      default: '/'
    },
    "onClick": {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  computed: {
    classObj: function () {
      return {
        "button": true,
        "variant-outline": this.variant === "outline",
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.button {
  width: 30px;
  height: 30px;
  margin-left: 2px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $cl-white;
}
.variant-outline {
  @extend .u-outline
}
</style>
