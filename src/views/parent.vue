<template>
  <h1>Judo Scoreboard</h1>

  <div v-if="!portChoosed">
    <button @click="ouvrirNouvelleFenetre">ouvrir afficheur</button>
  </div>

  <div v-else>
    <div>
      <h3>Combatant 1</h3>
      <h4>
        Nom <input v-model="nom1" @change="sendData" /> Prénom
        <input v-model="prenom1" @change="sendData" /> Club
        <input v-model="club1" @change="sendData" />
      </h4>
      I
      <input
        type="number"
        min="0"
        max="9"
        v-model="ippon1"
        @change="sendData" />
      W
      <input type="number" min="0" max="9" v-model="waza1" @change="sendData" />
      K
      <input
        type="number"
        min="0"
        max="99"
        v-model="kinza1"
        @change="sendData" />
      <div>
        S
        <input
          type="number"
          min="-1"
          max="3"
          v-model="shido1"
          @change="sendData" />
      </div>
    </div>
    <div>
      <h3>Combatant 2</h3>
      <h4>
        Nom <input v-model="nom2" @change="sendData" /> Prénom
        <input v-model="prenom2" @change="sendData" /> Club
        <input v-model="club2" @change="sendData" />
      </h4>
      I
      <input
        type="number"
        min="0"
        max="9"
        v-model="ippon2"
        @change="sendData" />
      W
      <input type="number" min="0" max="9" v-model="waza2" @change="sendData" />
      K
      <input
        type="number"
        min="0"
        max="99"
        v-model="kinza2"
        @change="sendData" />
      <div>
        S
        <input
          type="number"
          min="-1"
          max="3"
          v-model="shido2"
          @change="sendData" />
      </div>
    </div>
    <div>
      <a>
        <textarea
          v-model="infos"
          @change="sendData"
          style="width: 25vw; height: 12vh" />
      </a>
      <a>
        <input type="number" min="0" v-model="timerM" @change="sendData" />
        <input
          type="number"
          min="0"
          max="59"
          v-model="timerS"
          @change="sendData" />
        <input
          type="number"
          min="0"
          max="2"
          v-model="timerStatus"
          @change="sendData" />
      </a>
      <a>
        <h4>Se prépare</h4>
        <div>
          <input v-model="sp1name" style="width: 15vw" @change="sendData" />
          <input v-model="sp1surname" style="width: 15vw" @change="sendData" />
          -
          <input v-model="sp1club" style="width: 10vw" @change="sendData" />
        </div>
        <div>
          <input v-model="sp2name" style="width: 15vw" @change="sendData" />
          <input v-model="sp2surname" style="width: 15vw" @change="sendData" />
          -
          <input v-model="sp2club" style="width: 10vw" @change="sendData" />
        </div>
      </a>
    </div>
    <div>
      <br /><br /><br />
      <button @click="kill">kill</button>
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
