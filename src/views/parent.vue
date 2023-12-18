<template>
  <div v-if="!portChoosed">Merci de recharger la page</div>

  <div
    v-else
    style="font-family: Arial, Helvetica, sans-serif; font-weight: 600">
    <div
      style="background-color: red; color: white; height: 30vh; padding: 0 3vw">
      <div style="font-weight: 700; font-size: 5vh; padding-top: 2vh">
        Combatant 1
      </div>
      <br />
      <!--Combattant-->
      <div style="width: 55%; float: left">
        <div style="padding: 1vh 0 0 0">
          <a style="width: 4.5em; float: left; font-size: 3vh">Nom</a>
          <input
            v-model="nom1"
            @change="sendData"
            style="width: calc(75% - 4.5em); height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 4.5em; float: left; font-size: 3vh">Prénom</a>
          <input
            v-model="prenom1"
            @change="sendData"
            style="width: calc(75% - 4.5em); height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 4.5em; float: left; font-size: 3vh">Club</a>
          <input
            v-model="club1"
            @change="sendData"
            style="width: calc(75% - 4.5em); height: 3.5vh" />
        </div>
      </div>
      <!--Score-->
      <div style="width: 22.5%; float: left">
        <div style="padding: 1vh 0 0 0">
          <a style="width: 1.5em; float: left; font-size: 3vh">I</a>
          <input
            type="number"
            min="0"
            max="9"
            v-model="ippon1"
            @change="sendData"
            style="width: 3em; height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 1.5em; float: left; font-size: 3vh">W</a>
          <input
            type="number"
            min="0"
            max="9"
            v-model="waza1"
            @change="sendData"
            style="width: 3em; height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 1.5em; float: left; font-size: 3vh">K</a>
          <input
            type="number"
            min="0"
            max="99"
            v-model="kinza1"
            @change="sendData"
            style="width: 3em; height: 3.5vh" />
        </div>
      </div>
      <!--Pénalitées-->
      <div style="width: 22.5%; float: left; padding: 1vh 0 0 0">
        <a style="width: 1.5em; float: left; font-size: 3vh">S</a>
        <input
          type="number"
          min="-1"
          max="3"
          v-model="shido1"
          @change="sendData"
          style="width: 3em; height: 3.5vh" />
      </div>
    </div>
    <div
      style="
        background-color: white;
        color: black;
        height: 30vh;
        padding: 0 3vw;
      ">
      <div style="font-weight: 700; font-size: 5vh; padding-top: 2vh">
        Combatant 2
      </div>
      <br />
      <!--Combattant-->
      <div style="width: 55%; float: left">
        <div style="padding: 1vh 0 0 0">
          <a style="width: 4.5em; float: left; font-size: 3vh">Nom</a>
          <input
            v-model="nom2"
            @change="sendData"
            style="width: calc(75% - 4.5em); height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 4.5em; float: left; font-size: 3vh">Prénom</a>
          <input
            v-model="prenom2"
            @change="sendData"
            style="width: calc(75% - 4.5em); height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 4.5em; float: left; font-size: 3vh">Club</a>
          <input
            v-model="club2"
            @change="sendData"
            style="width: calc(75% - 4.5em); height: 3.5vh" />
        </div>
      </div>
      <!--Score-->
      <div style="width: 22.5%; float: left">
        <div style="padding: 1vh 0 0 0">
          <a style="width: 1.5em; float: left; font-size: 3vh">I</a>
          <input
            type="number"
            min="0"
            max="9"
            v-model="ippon2"
            @change="sendData"
            style="width: 3em; height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 1.5em; float: left; font-size: 3vh">W</a>
          <input
            type="number"
            min="0"
            max="9"
            v-model="waza2"
            @change="sendData"
            style="width: 3em; height: 3.5vh" />
        </div>
        <div style="padding: 1vh 0 0 0">
          <a style="width: 1.5em; float: left; font-size: 3vh">K</a>
          <input
            type="number"
            min="0"
            max="99"
            v-model="kinza2"
            @change="sendData"
            style="width: 3em; height: 3.5vh" />
        </div>
      </div>
      <!--Pénalitées-->
      <div style="width: 22.5%; float: left; padding: 1vh 0 0 0">
        <a style="width: 1.5em; float: left; font-size: 3vh">S</a>
        <input
          type="number"
          min="-1"
          max="3"
          v-model="shido2"
          @change="sendData"
          style="width: 3em; height: 3.5vh" />
      </div>
    </div>
    <div style="height: 40vh; background-color: black; color: white">
      <div style="padding: 3vh; width: 30vw; float: left">
        <textarea
          v-model="infos"
          @change="sendData"
          style="width: 25vw; height: 20vh; padding: 3vh; font-size: 2.5vh" />
        <div style="font-weight: 300; padding-top: 2vh">
          <i>5 lignes max</i>
        </div>
      </div>
      <div style="float: left; width: 25vw">
        <div style="padding-top: 10vh">
          <input
            type="number"
            min="0"
            v-model="timerM"
            @change="sendData"
            style="width: 1.5em; font-size: 4vw" />
          <input
            type="number"
            min="0"
            max="59"
            v-model="timerS"
            @change="sendData"
            style="width: 1.5em; font-size: 4vw" />
        </div>
        <div style="padding-left: 0.75em; padding-top: 2vh; font-size: 4vw">
          <input
            type="number"
            min="0"
            max="2"
            v-model="timerStatus"
            @change="sendData"
            style="width: 2.5em; font-size: 2.5vw" />
        </div>
      </div>
      <div style="float: left; width: 35vw">
        <h4 style="padding-top: 5vh">Se prépare</h4>
        <div style="height: 3.5vh">
          <input
            v-model="sp1name"
            style="width: 30%; height: 3.5vh"
            @change="sendData" />
          <input
            v-model="sp1surname"
            style="width: 30%; height: 3.5vh"
            @change="sendData" />
          -
          <input
            v-model="sp1club"
            style="width: 20%; height: 3.5vh"
            @change="sendData" />
        </div>
        <div style="padding-top: 2vh">
          <input
            v-model="sp2name"
            style="width: 30%; height: 3.5vh"
            @change="sendData" />
          <input
            v-model="sp2surname"
            style="width: 30%; height: 3.5vh"
            @change="sendData" />
          -
          <input
            v-model="sp2club"
            style="width: 20%; height: 3.5vh"
            @change="sendData" />
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
const options = "width=800,height=600"
var nouvelleFenetre

export default {
  data() {
    return {
      //datas player 1
      nom1: "Combatant",
      prenom1: "n° 1",
      club1: "FRA",
      shido1: 0,
      ippon1: 0,
      waza1: 0,
      kinza1: 0,

      //datas player 2
      nom2: "Combatant",
      prenom2: "n° 2",
      club2: "FRA",
      shido2: 0,
      ippon2: 0,
      waza2: 0,
      kinza2: 0,

      timerM: 5,
      timerS: 0,

      timerStatus: 0,

      infos: "Tournoi du\n2 Lays Judo Chantonnay\nToutes catégories",

      sp1name: "",
      sp1surname: "",
      sp1club: "",

      sp2name: "",
      sp2surname: "",
      sp2club: "",

      //variables de fonctionnement
      port: "",
      portChoosed: false,
      childLink: "",
    }
  },

  //on setup le port lors de la création
  created() {
    var win = window.origin
    var tmp = win.substring(win.indexOf("://") + 3)
    this.port = tmp.substring(tmp.indexOf(":") + 1)
    setTimeout(() => {
      this.ouvrirNouvelleFenetre()
    }, 500)
  },

  methods: {
    createListen() {
      window.addEventListener("message", (event) => {
        if (event.origin === this.childLink) {
          const donnees = event.data
          if (donnees.kill) this.kill()
        }
      })
    },

    ouvrirNouvelleFenetre() {
      this.childLink = "http://localhost:" + this.port
      this.portChoosed = true
      nouvelleFenetre = window.open(this.childLink + "/e/", "_blank", options)
      setTimeout(() => {
        nouvelleFenetre.postMessage({ link: true }, "*")
      }, 1000)
      this.createListen()

      setTimeout(() => {
        this.sendData()
      }, 1000)
    },

    kill() {
      nouvelleFenetre.close()
      this.portChoosed = false
      this.childLink = ""
    },

    sendData() {
      nouvelleFenetre.postMessage(this.datas, "*")
    },
  },

  computed: {
    timer() {
      return this.timerM * 60 + this.timerS
    },

    //datas envoyées vers la page fils
    datas() {
      return {
        player1: {
          nom: this.nom1,
          prenom: this.prenom1,
          club: this.club1,
          shido: this.shido1,
          score: { ippon: this.ippon1, waza: this.waza1, kinza: this.kinza1 },
        },
        player2: {
          nom: this.nom2,
          prenom: this.prenom2,
          club: this.club2,
          shido: this.shido2,
          score: { ippon: this.ippon2, waza: this.waza2, kinza: this.kinza2 },
        },

        timer: this.timer,

        timerStatus: this.timerStatus,

        infos: this.infos.split("\n"),

        nexts: [
          { nom: this.sp1name, prenom: this.sp1surname, club: this.sp1club },
          { nom: this.sp2name, prenom: this.sp2surname, club: this.sp2club },
        ],
      }
    },
  },
}
</script>
<style scoped></style>
