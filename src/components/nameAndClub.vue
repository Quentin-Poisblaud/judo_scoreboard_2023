<template>
  <div class="general" :style="cssVars">
    <div v-if="girouetteTimer" class="content overflow">
      <div class="overflow">
        <div class="overflow">
          {{ name.toUpperCase() }}
        </div>
        <div class="overflow">{{ surname }}</div>
      </div>
    </div>
    <div v-else class="content overflow">
      {{ club }}
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
    name: { default: "Combatant" },
    surname: { default: "Cbt" },
    club: { default: "FRA" },
  },
  created() {
    this.changeGirouetteTimerStatus()
  },
  methods: {
    /**
     * Change le statut de la girouette Nom Prénom / Club selon un patern régulier
     */
    changeGirouetteTimerStatus() {
      this.girouetteTimer = true
      setTimeout(() => {
        this.girouetteTimer = false
        setTimeout(() => {
          this.changeGirouetteTimerStatus()
        }, 2000)
      }, 3000)
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
  font-size: 5vw;
  font-weight: 700;
}
.content {
  height: 100%;
  padding: 0 7%;
  display: grid;
  align-items: center;
}

.overflow {
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
