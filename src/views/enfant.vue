<template>
  <div style="background-color: red; color: white; height: 37.5vh; margin: 0">
    <!--Combattant-->
    <div class="player">
      <div v-if="girouetteTimer" style="height: 100%">
        <div class="style" style="height: 100%">
          <pre style="font-family: Arial, Helvetica, sans-serif"
            >{{ player1.nom.toUpperCase() }}
{{ player1.prenom }}</pre
          >
        </div>
      </div>
      <div v-else style="height: 100%">
        <div class="style" style="height: 100%">{{ player1.club }}</div>
      </div>
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
      <div v-if="girouetteTimer" style="height: 100%">
        <div class="style" style="height: 100%">
          <pre style="font-family: Arial, Helvetica, sans-serif"
            >{{ player2.nom.toUpperCase() }}
{{ player2.prenom }}</pre
          >
        </div>
      </div>
      <div v-else style="height: 100%">
        <div class="style" style="height: 100%">{{ player2.club }}</div>
      </div>
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
        <div class="showed" v-show="player2.shidoshido >= 1">S1</div>
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
// const options = 'width=800,height=600'
// var nouvelleFenetre

export default {
  data() {
    return {
      player1: {
        nom: "Poisblaud",
        prenom: "Quentin",
        club: "2LJC",
        shido: 1, //-1 = H ; 1 à 3 = nb Shido
        score: {
          ippon: 0,
          waza: 0,
          kinza: 0,
        },
      },

      player2: {
        nom: "Dupond",
        prenom: "Hyve",
        club: "PCO",
        shido: -1, //-1 = H ; 1 à 3 = nb Shido
        score: {
          ippon: 2,
          waza: 3,
          kinza: 12,
        },
      },

      timer: 300, //temps en secondes

      timerStatus: 2, //0=mate, 1 hajime, 2 goldenScore

      infos: ["Tournoi de Pouzauges", "Benjamins", "Poussins", "Mini-poussins"],

      nexts: [
        {
          nom: "Poisblaud",
          prenom: "Quentin",
          club: "2LJC",
        },

        {
          nom: "Dupond",
          prenom: "Hyve",
          club: "PCO",
        },
      ],

      girouetteTimer: true,

      // port: '',
      // portChoosed: false,
      messageSend: "",
      messageRecieved: "",
      parentLink: "",
    }
  },
  created() {
    this.changeGirouetteTimerStatus()
    // var tmp=window.origin
    // var lul =tmp.substring(tmp.indexOf('://')+3)
    // this.port=lul.substring(lul.indexOf(':')+1)
    window.addEventListener("message", (event) => {
      const donnees = event.data
      if (donnees.link) {
        this.parentLink = event.origin
        this.createListen()
      }
    })
    window.addEventListener("beforeunload", () => {
      window.opener.postMessage({ kill: true }, "*")
    })
  },

  computed: {
    datas() {
      return { message: this.messageSend }
    },
  },
  methods: {
    changeGirouetteTimerStatus() {
      this.girouetteTimer = true
      setTimeout(() => {
        this.girouetteTimer = false
        setTimeout(() => {
          this.changeGirouetteTimerStatus()
        }, 2000)
      }, 3000)
    },
    createListen() {
      window.addEventListener("message", (event) => {
        if (event.origin === this.parentLink) {
          const donnees = event.data
          // if (donnees.kill) this.kill()
          this.traitement(donnees)
        }
      })
    },
    traitement(donnees) {
      this.messageRecieved = donnees.message
    },
    sendData() {
      window.opener.postMessage(this.datas, "*")
    },

    // ouvrirNouvelleFenetre() {
    //   this.childLink = 'http://localhost:' + this.port
    //   this.portChoosed = true
    //   nouvelleFenetre = window.open(this.childLink + '/e/', '_blank', options)
    //   setTimeout(() => {
    //     nouvelleFenetre.postMessage({ link: true }, '*')
    //   }, 1000)
    //   this.createListen()
    // },

    // kill() {
    //   nouvelleFenetre.close()
    //   this.port = ''
    //   this.portChoosed = false
    //   this.messageSend = ''
    //   this.messageRecieved = ''
    //   this.childLink = ''
    // }
  },
}
</script>
<style scoped>
.player {
  width: 40%;
  height: 100%;
  float: left;

  .style {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-size: 6vw;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    padding-left: 10%;
  }
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
    background-color: red;
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
