<template>
  <div id="navigation">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          ServiceGraph IT
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/configurator" class="navbar-item">Angebot</router-link>
          <router-link to="/service" class="navbar-item">Leistungen</router-link>
          <router-link to="/contact" class="navbar-item">Kontakt</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <issueButton/>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import IssueButton from "@/components/IssueButton.vue";

export default {
  name: "Navigation",
  components: {
    IssueButton
  }
}
</script>
