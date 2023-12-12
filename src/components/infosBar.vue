<!--TODO: améliorer la lisibilitée du HTML -->
<!--NOTES: utiliser des composants pourrait GRANDEMENT simplifier cela-->

<template>
  <div style="background-color: black; height: 100%; margin: 0">
    <div
      style="
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 100%;
        float: left;
      ">
      <div
        style="
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 700;
          font-size: 2vw;
        ">
        <div v-for="item in infos">{{ item }}</div>
      </div>
    </div>

    <div
      style="
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 100%;
        float: left;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 12vw;
      ">
      <a style="color: gold" v-if="timerStatus === 2">
        {{ ("0" + Math.trunc(this.timer / 60)).slice(-2) }}:{{
          ("0" + (this.timer % 60)).slice(-2)
        }}
      </a>
      <a style="color: lime" v-else-if="timerStatus === 1">
        {{ ("0" + Math.trunc(this.timer / 60)).slice(-2) }}:{{
          ("0" + (this.timer % 60)).slice(-2)
        }}
      </a>
      <a style="color: red" v-else>
        {{ ("0" + Math.trunc(this.timer / 60)).slice(-2) }}:{{
          ("0" + (this.timer % 60)).slice(-2)
        }}
      </a>
    </div>
    <div
      style="
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 100%;
        float: left;
      ">
      <div
        style="
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 700;
          font-size: 2vw;
        ">
        <div>Se prépare :</div>
        <div v-for="item in nexts">
          {{ item.nom.toUpperCase() }} {{ item.prenom }} - {{ item.club }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    timer: { default: 300 }, //temps en secondes

    timerStatus: { default: 0 }, //0=mate, 1 hajime, 2 goldenScore

    infos: {
      default() {
        return ["Tournoi du", "2 Lays Judo Chatonnay", "Toutes catégories"]
      },
    },
    nexts: {
      default() {
        return [
          {
            nom: "",
            prenom: "",
            club: "",
          },

          {
            nom: "",
            prenom: "",
            club: "",
          },
        ]
      },
    },
  },
}
</script>
