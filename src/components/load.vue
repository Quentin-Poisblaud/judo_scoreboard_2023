<template>
    <div style="display: inline" v-if="timerOS != 0">
        <a :style="cssVars">
            <div class="bar show"></div>
            <div class="bar hide"></div>
        </a>
        {{ timerOS }}
    </div>
</template>
<script>
export default {
    props: {
        timerOS: 0,
    },
    computed: {
        tmpColor() {
            if (this.timerOS < 10) {
                return "red"
            } else if (this.timerOS < 20) {
                return "gold"
            } else {
                return "green"
            }
        },
        cssVars() {
            return {
                "--size": this.timerOS,
                "--tmpcolor": this.tmpColor,
            }
        },
    },
}
</script>
<style scoped>
.bar {
    display: inline-block;
    height: 2em;
    margin-bottom: -0.7em;
}
.show {
    background-color: var(--tmpcolor);
    width: calc(16em / 20 * var(--size));
}
.hide {
    background-color: white;
    width: calc(16em - 16em / 20 * var(--size));
}
</style>
