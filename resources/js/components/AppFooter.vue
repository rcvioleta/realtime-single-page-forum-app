<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout justify-center row wrap>
      <router-link v-for="link in links" :key="link" :to="link.toLowerCase()">
        <v-btn flat square>{{ link }}</v-btn>
      </router-link>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2018 —
        <strong>SPA Forum</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["Forum", "Ask-Question", "Category", "Login"]
  })
};
</script>

<style>
</style>

