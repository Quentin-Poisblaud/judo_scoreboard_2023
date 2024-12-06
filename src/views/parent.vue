<template>
    <div v-if="!portChoosed">Merci de recharger la page</div>

    <div
        v-else
        style="font-family: Arial, Helvetica, sans-serif; font-weight: 600">
        <div
            style="
                background-color: red;
                color: white;
                height: 30vh;
                padding: 0 3vw;
            ">
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
                    <a style="width: 4.5em; float: left; font-size: 3vh"
                        >Prénom</a
                    >
                    <input
                        v-model="prenom1"
                        @change="sendData"
                        style="width: calc(75% - 4.5em); height: 3.5vh" />
                </div>
                <div style="padding: 1vh 0 0 0">
                    <a style="width: 4.5em; float: left; font-size: 3vh"
                        >Club</a
                    >
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
            <div style="width: 22.5%; float: left">
                <div style="padding: 1vh 0 0 0">
                    <a style="width: 1.5em; float: left; font-size: 3vh">S</a>
                    <input
                        type="number"
                        min="0"
                        max="3"
                        v-model="s1"
                        @change="sendData"
                        style="width: 3em; height: 3.5vh" />
                </div>
                <div style="padding: 1vh 0 0 0">
                    <input
                        @change="sendData"
                        type="checkbox"
                        style="transform: scale(2); margin-top: 1vh"
                        v-model="h1" />
                    <a style="width: 1.5em; float: left; font-size: 3vh">H</a>
                </div>
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
                    <a style="width: 4.5em; float: left; font-size: 3vh"
                        >Prénom</a
                    >
                    <input
                        v-model="prenom2"
                        @change="sendData"
                        style="width: calc(75% - 4.5em); height: 3.5vh" />
                </div>
                <div style="padding: 1vh 0 0 0">
                    <a style="width: 4.5em; float: left; font-size: 3vh"
                        >Club</a
                    >
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
            <div style="width: 22.5%; float: left">
                <div style="padding: 1vh 0 0 0">
                    <a style="width: 1.5em; float: left; font-size: 3vh">S</a>
                    <input
                        type="number"
                        min="0"
                        max="3"
                        v-model="s2"
                        @change="sendData"
                        style="width: 3em; height: 3.5vh" />
                </div>
                <div style="padding: 1vh 0 0 0">
                    <input
                        @change="sendData"
                        type="checkbox"
                        style="transform: scale(2); margin-top: 1vh"
                        v-model="h2" />
                    <a style="width: 1.5em; float: left; font-size: 3vh">H</a>
                </div>
            </div>
        </div>
        <div style="height: 40vh; background-color: black; color: white">
            <div style="padding: 3vh; width: 30vw; float: left">
                <textarea
                    v-model="infos"
                    @change="sendData"
                    style="
                        width: 25vw;
                        height: 20vh;
                        padding: 3vh;
                        font-size: 2.5vh;
                    " />
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
                <div style="padding-top: 2vh; font-size: 4vw">
                    <!--input
            type="number"
            min="0"
            max="2"
            v-model="timerStatus"
            @change="sendData"
            style="width: 2.5em; font-size: 2.5vw" /-->
                    <button
                        @click="changeHajime"
                        style="width: 5.5em; height: 2em; font-size: 2.5vw">
                        {{ hajime ? "mate" : "hajime" }}
                    </button>
                    <button
                        @click="this.gs = !this.gs"
                        style="width: 2.5em; height: 2em; font-size: 2.5vw">
                        <a style="font-size: 1.75vw">
                            {{ gs ? "GS on" : "GS off" }}
                        </a>
                    </button>
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
                <div>
                    <button
                        @click="osaekomiChange(false)"
                        style="
                            width: 5.5em;
                            height: 2em;
                            font-size: 1vw;
                            margin-top: 3em;
                        ">
                        {{ os ? "toketa" : "osaekomi" }}
                    </button>
                    <button
                        v-if="timerOS != 0"
                        @click="osaekomiChange(true)"
                        style="
                            width: 7em;
                            height: 2em;
                            font-size: 1vw;
                            margin-right: 1em;
                        ">
                        {{ os ? "sonomama" : "yoshi" }}
                    </button>
                    <button
                        v-else
                        disabled
                        style="
                            width: 7em;
                            height: 2em;
                            font-size: 1vw;
                            margin-right: 1em;
                        ">
                        sonomama
                    </button>
                    <load :timerOS="timerOS" />
                </div>
            </div>

            <button
                @click="reset"
                style="
                    width: 5.5em;
                    height: 2em;
                    margin-top: 8em;
                    font-size: 1vw;
                ">
                Reset
            </button>
        </div>
    </div>

    <router-view></router-view>
</template>

<script>
const options = "width=800,height=600"
var nouvelleFenetre
import load from "../components/load.vue"

export default {
    data() {
        return {
            cooldown: false,

            gs: false,

            hajime: false,
            os: false,

            //datas player 1
            nom1: "Combatant",
            prenom1: "n° 1",
            club1: "2LJC",
            s1: 0,
            h1: false,
            ippon1: 0,
            waza1: 0,
            kinza1: 0,

            //datas player 2
            nom2: "Combatant",
            prenom2: "n° 2",
            club2: "2LJC",
            s2: 0,
            h2: false,
            ippon2: 0,
            waza2: 0,
            kinza2: 0,

            timerM: 3,
            timerS: 0,
            timerOS: 0,

            timerStatus: 0,

            infos: "Tournoi interne du\n2 Lays Judo Chantonnay\n21/12/2024\nToutes catégories",

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
    components: { load },
    //on setup le port lors de la création
    created() {
        var win = window.origin
        var tmp = win.substring(win.indexOf("://") + 3)
        this.port = tmp.substring(tmp.indexOf(":") + 1)
        setTimeout(() => {
            this.ouvrirNouvelleFenetre()
        }, 500)

        window.addEventListener("keydown", (e) => {
            if (e.key === " ") {
                this.changeHajime()
            }
        })
    },

    methods: {
        reset() {
            this.cooldown = false
            this.false
            this.hajime = false
            //datas player 1
            this.nom1 = "Combatant"
            this.prenom1 = "n° 1"
            this.club1 = "2LJC"
            this.s1 = 0
            this.h1 = false
            this.ippon1 = 0
            this.waza1 = 0
            this.kinza1 = 0
            //datas player 2
            this.nom2 = "Combatant"
            this.prenom2 = "n° 2"
            this.club2 = "2LJC"
            this.s2 = 0
            this.h2 = false
            this.ippon2 = 0
            this.waza2 = 0
            this.kinza2 = 0
            this.timerM = 3
            this.timerS = 0
            this.timerStatus = 0
            this.sp1name = ""
            this.sp1surname = ""
            this.sp1club = ""
            this.sp2name = ""
            this.sp2surname = ""
            this.sp2club = ""
        },
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
            nouvelleFenetre = window.open(
                this.childLink + "/e/",
                "_blank",
                options
            )
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

        changeHajime() {
            if (!this.cooldown) {
                this.cooldown = true

                this.hajime = !this.hajime
                if (this.hajime) {
                    this.sendData()
                    this.timerDown()
                    //TODO: pour golden
                } else {
                    this.timerStatus = 0
                    this.sendData()
                }
                setTimeout(() => {
                    this.cooldown = false
                }, 500)
            }
        },
        osaekomiChange(isSonomama) {
            if (!this.cooldown) {
                this.cooldown = true

                this.os = !this.os
                if (this.os) {
                    this.osaekomiUp()
                } else {
                    if (!isSonomama) {
                        this.timerOS = 0
                    }
                }
                setTimeout(() => {
                    this.cooldown = false
                }, 500)
            }
            this.sendData()
        },
        osaekomiUp() {
            if (this.os) {
                if (this.timerOS < 20) {
                    this.timerOS++
                    this.sendData()
                    setTimeout(() => {
                        this.osaekomiUp()
                    }, 1000)
                }
            }
        },

        timerDown() {
            this.timerStatus = this.gs ? 2 : 1
            if (this.timer === 0 && !this.gs) {
                this.hajime = false
                this.timerStatus = 0
                this.sendData()
                this.gs = true
            }
            if (this.hajime) {
                if (this.gs) {
                    if (this.timerS >= 59) {
                        this.timerM++
                        this.timerS -= 59
                    } else this.timerS++
                    this.sendData()
                    setTimeout(() => {
                        this.timerDown()
                    }, 1000)
                } else {
                    if (this.timerS <= 0) {
                        this.timerM--
                        this.timerS += 59
                    } else this.timerS--
                    this.sendData()
                    setTimeout(() => {
                        this.timerDown()
                    }, 1000)
                }
            }
        },
    },

    computed: {
        shido1() {
            if (this.h1) return -1
            else return this.s1
        },
        shido2() {
            if (this.h2) return -1
            else return this.s2
        },
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
                    score: {
                        ippon: this.ippon1,
                        waza: this.waza1,
                        kinza: this.kinza1,
                    },
                },
                player2: {
                    nom: this.nom2,
                    prenom: this.prenom2,
                    club: this.club2,
                    shido: this.shido2,
                    score: {
                        ippon: this.ippon2,
                        waza: this.waza2,
                        kinza: this.kinza2,
                    },
                },

                timer: this.timer,
                timerOS: this.timerOS,

                timerStatus: this.timerStatus,

                infos: this.infos.split("\n"),

                nexts: [
                    {
                        nom: this.sp1name,
                        prenom: this.sp1surname,
                        club: this.sp1club,
                    },
                    {
                        nom: this.sp2name,
                        prenom: this.sp2surname,
                        club: this.sp2club,
                    },
                ],
            }
        },
    },
}
</script>
<style scoped></style>
