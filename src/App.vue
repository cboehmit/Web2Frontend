<template>
  <div id="app">
    <navigation/>

    <div class="container">
      <router-view />
    </div>

    <socialFooter/>
  </div>
</template>

<style scoped>

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
