<template>
  <div class="general" :style="cssVars">
    <div>
      <a>{{ score.ippon }}</a>
      <a style="padding-inline: 10%">{{ score.waza }}</a>
      <a>{{ ("0" + score.kinza).slice(-2) }}</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { girouetteTimer: false }
  },
  props: {
    background_color: { default: "grey" },
    font_color: { default: "black" },
    score: {
      default() {
        return {
          ippon: 0,
          waza: 0,
          kinza: 0,
        }
      },
    },
  },
  computed: {
    cssVars() {
      return {
        "--background_color": this.background_color,
        "--font_color": this.font_color,
      }
    },
  },
}
</script>
<style scoped>
.general {
  height: 100%;
  width: 100%;
  background-color: var(--background_color);
  color: var(--font_color);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16vw;
  font-weight: 700;
  display: grid;
  align-items: center;
  text-align: center;
}
</style>
