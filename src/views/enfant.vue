<!--TODO: améliorer la lisibilitée du HTML et CSS-->
<!--NOTES: utiliser des composants pourrait GRANDEMENT simplifier cela-->

<template>
  <div style="background-color: red; color: white; height: 37.5vh; margin: 0">
    <!--Combattant-->
    <div class="player">
      <nameAndClub
        :background_color="'red'"
        :font_color="'white'"
        :name="player1.nom"
        :surname="player1.prenom"
        :club="player1.club" />
    </div>

    <!--Score-->
    <div class="score">
      <div class="style">
        {{ player1.score.ippon }} <a style="padding-inline: 7%"></a>
        {{ player1.score.waza }} <a style="padding-inline: 7%"></a>
        {{ ("0" + player1.score.kinza).slice(-2) }}
      </div>
    </div>

    <!--Pénalitées-->
    <div
      style="width: 8%; height: 100%; float: left"
      v-if="player1.shido === -1"
      class="hansokumake">
      <div class="showed">H</div>
    </div>
    <div style="width: 8%; height: 100%; float: left" v-else>
      <div class="shido">
        <div class="showed" v-show="player1.shido >= 3">S3</div>
      </div>
      <div class="shido">
        <div class="showed" v-show="player1.shido >= 2">S2</div>
      </div>
      <div class="shido">
        <div class="showed" v-show="player1.shido >= 1">S1</div>
      </div>
    </div>
  </div>

  <div style="background-color: white; color: black; height: 37.5vh; margin: 0">
    <!--Combattant-->
    <div class="player">
      <nameAndClub
        :background_color="'white'"
        :font_color="'black'"
        :name="player2.nom"
        :surname="player2.prenom"
        :club="player2.club" />
    </div>

    <!--Score-->
    <div class="score">
      <div class="style">
        {{ player2.score.ippon }} <a style="padding-inline: 7%"></a>
        {{ player2.score.waza }} <a style="padding-inline: 7%"></a>
        {{ ("0" + player2.score.kinza).slice(-2) }}
      </div>
    </div>

    <!--Pénalitées-->
    <div
      style="width: 8%; height: 100%; float: left"
      v-if="player2.shido === -1"
      class="hansokumake">
      <div class="showed">H</div>
    </div>
    <div style="width: 8%; height: 100%; float: left" v-else>
      <div class="shido">
        <div class="showed" v-show="player2.shido >= 3">S3</div>
      </div>
      <div class="shido">
        <div class="showed" v-show="player2.shido >= 2">S2</div>
      </div>
      <div class="shido">
        <div class="showed" v-show="player2.shido >= 1">S1</div>
      </div>
    </div>
  </div>

  <div style="background-color: black; height: 25vh; margin: 0">
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
import nameAndClub from "../components/nameAndClub.vue"

export default {
  data() {
    return {
      player1: {
        nom: "Combatant",
        prenom: "n° 1",
        club: "FRA",
        shido: 0, //-1 = H ; 1 à 3 = nb Shido
        score: {
          ippon: 0,
          waza: 0,
          kinza: 0,
        },
      },

      player2: {
        nom: "Combatant",
        prenom: "n° 2",
        club: "FRA",
        shido: 0, //-1 = H ; 1 à 3 = nb Shido
        score: {
          ippon: 0,
          waza: 0,
          kinza: 0,
        },
      },

      timer: 300, //temps en secondes

      timerStatus: 0, //0=mate, 1 hajime, 2 goldenScore

      infos: ["Tournoi du", "2 Lays Judo Chatonnay", "Toutes catégories"],

      nexts: [
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
      ],

      parentLink: "",
    }
  },
  components: {
    nameAndClub,
  },
  created() {
    /**
     * définit l'adresse du parent
     */
    window.addEventListener("message", (event) => {
      const donnees = event.data
      if (donnees.link) {
        this.parentLink = event.origin
      }
    })

    /**
     * écoute des datas du parent
     */
    window.addEventListener("message", (event) => {
      if (event.origin === this.parentLink) {
        const donnees = event.data
        this.traitement(donnees)
      }
    })

    /**
     * envoie au parent un faire part de décès
     */
    window.addEventListener("beforeunload", () => {
      window.opener.postMessage({ kill: true }, "*")
    })
  },

  methods: {
    /**
     * Attribue les données reçu de la page parent au variables locales pour l'affichage
     *
     * @param donnees
     */
    traitement(donnees) {
      if (donnees.player1 !== undefined) {
        this.player1 = donnees.player1
        this.player2 = donnees.player2
        this.timer = donnees.timer
        this.timerStatus = donnees.timerStatus
        this.infos = donnees.infos
        this.nexts = donnees.nexts
      }
    },
  },
}
</script>

<style scoped>
.player {
  width: 40%;
  height: 100%;
  float: left;
}
.score {
  width: 52%;
  height: 100%;
  float: left;
  .style {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 13vw;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    padding-left: 10%;
  }
}
.shido {
  height: calc(100% / 3);
  color: black;
  .showed {
    display: flex;
    height: calc(100% - 4px);
    background-color: yellow;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    border: 2px solid black;
  }
}
.hansokumake {
  .showed {
    display: flex;
    height: calc(100% - 4px);
    background-color: orangered;
    align-items: center;
    justify-content: center;
    font-size: 5vw;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    border: 2px solid black;
    color: white;
  }
}
</style>
