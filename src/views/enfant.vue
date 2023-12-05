<template>
  
    <h1>Enfant</h1>

    <!-- <div v-if="!portChoosed">
      <input v-model="port" />
      <button @click="ouvrirNouvelleFenetre">ouvrir enfant</button>
    </div> -->

    <div>
      <input v-model="messageSend" />
      <button @click="sendData">envoyer data</button>
      <br />

      {{ messageRecieved }}

      <!-- <div>
        <button @click="kill">kill</button>
      </div> -->
    </div>
  
  <router-view></router-view>
</template>

<script>

// const options = 'width=800,height=600'
// var nouvelleFenetre

export default {

  data() {
    return {
      // port: '',
      // portChoosed: false,
      messageSend: '',
      messageRecieved: '',
      parentLink: ''
    }
  },
  created() {
    // var tmp=window.origin
    // var lul =tmp.substring(tmp.indexOf('://')+3)
    // this.port=lul.substring(lul.indexOf(':')+1)
    window.addEventListener('message', (event) => {
      const donnees = event.data
      if (donnees.link) {
        this.parentLink = event.origin
        this.createListen()
      }
    })
    window.addEventListener('beforeunload', () => {
      window.opener.postMessage({ kill: true }, '*')
    })
  },

  computed: {
    datas() {
      return { message: this.messageSend }
    }
  },
  methods: {
    createListen() {
      window.addEventListener('message', (event) => {
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
      window.opener.postMessage(this.datas, '*')
    }

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
  }
}
</script>
<style lang="scss" scoped></style>
