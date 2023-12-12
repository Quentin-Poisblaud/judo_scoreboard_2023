<template>
  <div class="general" :style="cssVars">
    <div v-if="penalties === -1" class="hansokumake">H</div>
    <div v-else style="height: 100%">
      <div class="shido">
        <div class="showed" v-show="penalties >= 3">S3</div>
      </div>
      <div class="shido">
        <div class="showed" v-show="penalties >= 2">S2</div>
      </div>
      <div class="shido">
        <div class="showed" v-show="penalties >= 1">S1</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    background_color: { default: "grey" },
    penalties: { default: 0 },
  },
  computed: {
    cssVars() {
      return {
        "--background_color": this.background_color,
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
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}

.hansokumake {
  height: calc(100% - 4px);
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: orangered;
  color: white;
  font-size: 5vw;
  border: 2px solid black;
}

.shido {
  height: calc(100% / 3);
  .showed {
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    color: black;
    font-size: 3vw;
    border: 2px solid black;
  }
}
</style>
