<template>
  <button :class="classObj" :aria-label="label" @click="onClick" >
    <slot/>
    <img v-if="iconSrc !== ''" :src="iconSrc" class="button-icon" alt>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    "label": {
      type: String,
      required: false,
      default: ""
    },
    "iconSrc": {
      type: String,
      required: false,
      default: ""
    },
    "variant": {
      type: String,
      required: false,
      default: ""
    },
    "anim": {
      type: String,
      required: false,
      default: ""
    },
    "to": {
      type: String,
      required: false,
      default: "/"
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
        "anim-small": this.anim === "small",
        "anim-med": this.anim === "med",
        "anim-large": this.anim === "large",
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/sass/main.scss";

.button {
  position: relative;
  margin-left: 2px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $cl-white;
  font-size: 1rem;
  font-weight: bold;
}
.anim-small {
  &:hover, &:focus {
    @extend .u-outline;
  }
  &:active {
    @extend .u-push-small;
  }
}
.anim-med {
  &:hover, &:focus {
    @extend .u-pop-small;
  }
  &:active {
    @extend .u-push-small;
  }
}
.anim-large {
  &:hover, &:focus {
    @extend .u-pop-small; // TODO: tweak anim size
  }
  &:active {
    @extend .u-push-large;
  }
}
.variant-outline {
  @extend .u-outline;
}
.button-icon {
  width: 100%;
}
</style>
