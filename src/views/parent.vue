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
        <input v-model="prenom1" @change="sendData" />
      </h4>
      <h4>Club <input v-model="club1" @change="sendData" /></h4>
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
        <input v-model="prenom2" @change="sendData" />
      </h4>
      <h4>Club <input v-model="club2" @change="sendData" /></h4>
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
      club1: "FR",
      shido1: 0,
      ippon1: 0,
      waza1: 0,
      kinza1: 0,

      //datas player 2
      nom2: "Combatant",
      prenom2: "n° 2",
      club2: "FR",
      shido2: 0,
      ippon2: 0,
      waza2: 0,
      kinza2: 0,

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

  computed: {
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

        //TODO: ajouter la gestion du timer, infos et se prépare
      }
    },
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
}
</script>
<style scoped></style>
