<template>
  <div id="issueButton">
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Check your order" />
      </div>
      <div class="control">
        <a class="button is-info" v-on:click="searchIssue">Go</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    searchIssue: function() {
      alert("Hello World");
    }
  }
};
</script>