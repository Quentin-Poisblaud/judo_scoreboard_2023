<template>
  <div style="height: 100%; width: 100%">
    <!--Combattant-->
    <div style="width: 50%; height: 100%; float: left">
      <nameAndClub
        :background_color="background_color"
        :font_color="font_color"
        :name="player.nom"
        :surname="player.prenom"
        :club="player.club" />
    </div>

    <!--Score-->
    <div style="width: 42%; height: 100%; float: left">
      <score
        :background_color="background_color"
        :font_color="font_color"
        :score="player.score" />
    </div>

    <!--Pénalitées-->
    <div style="width: 8%; height: 100%; float: left">
      <penalties
        :background_color="background_color"
        :penalties="player.shido" />
    </div>
  </div>
</template>
<script>
import nameAndClub from "../components/nameAndClub.vue"
import score from "../components/score.vue"
import penalties from "../components/penalties.vue"

export default {
  props: {
    background_color: { default: "grey" },
    font_color: { default: "black" },
    player: {
      default() {
        return {
          nom: "Combatant",
          prenom: "Cbt",
          club: "FRA",
          shido: 0, //-1 = H ; 1 à 3 = nb Shido
          score: {
            ippon: 0,
            waza: 0,
            kinza: 0,
          },
        }
      },
    },
  },
  components: {
    nameAndClub,
    score,
    penalties,
  },
}
</script>
