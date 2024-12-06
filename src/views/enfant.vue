<template>
    <div style="height: 37.5vh">
        <player
            :background_color="'red'"
            :font_color="'white'"
            :player="player1" />
    </div>

    <div style="height: 37.5vh">
        <player
            :background_color="'white'"
            :font_color="'black'"
            :player="player2" />
    </div>

    <div style="height: 25vh">
        <infosBar
            :timer="timer"
            :timerStatus="timerStatus"
            :infos="infos"
            :nexts="nexts"
            :timerOS="timerOS" />
    </div>
</template>

<script>
import player from "../components/player.vue"
import infosBar from "../components/infosBar.vue"

export default {
    data() {
        return {
            timerOS: 0,
            player1: {
                nom: "Combatant",
                prenom: "n° 1",
                club: "2LJC",
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
                club: "2LJC",
                shido: 0, //-1 = H ; 1 à 3 = nb Shido
                score: {
                    ippon: 0,
                    waza: 0,
                    kinza: 0,
                },
            },

            timer: 180, //temps en secondes

            timerStatus: 0, //0=mate, 1 hajime, 2 goldenScore

            infos: [
                "Tournoi interne du",
                "2 Lays Judo Chantonnay",
                "23/12/2023",
                "Toutes catégories",
            ],

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
        player,
        infosBar,
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
                this.timerOS = donnees.timerOS
                this.timerStatus = donnees.timerStatus
                this.infos = donnees.infos
                this.nexts = donnees.nexts
            }
        },
    },
}
</script>
