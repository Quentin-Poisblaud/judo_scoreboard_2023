<template>
  <RouterView />
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

export default{
  created() {
    setTimeout(() => {
      if(this.$route.path==='/'){
      this.$router.push({
        name: 'p',
      })
    }
    }, 500);
  }
}
</script>
<style lang="scss" scoped></style>
