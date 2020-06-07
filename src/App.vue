<template>
  <div id="app">
    <navigation />

    <div class="container">
      <router-view />
    </div>

    <socialFooter />
  </div>
</template>

<style lang="sass">
  @import "bulma/sass/utilities/_all.sass"
  @import "bulma/sass/grid/columns.sass"

  body
    font-family : 'Montserrat', sans-serif
    padding: 0px
    margin: 0px
</style>

<script>
import Navigation from "@/components/Navigation.vue";
import SocialFooter from "@/components/SocialFooter.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    SocialFooter
  }
};
</script>
