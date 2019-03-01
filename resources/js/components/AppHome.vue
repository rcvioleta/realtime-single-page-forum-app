<template>
  <div>
    <toolbar></toolbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import toolbar from "./Toolbar";
import footer from "./AppFooter";

export default {
  components: {
    toolbar,
    "app-footer": footer
  }
};
</script>

<style>
.theme--light.v-toolbar a,
.layout a {
  text-decoration: none;
}

.theme--light.v-toolbar {
  background-color: #488fef;
}

.v-toolbar__title,
.v-btn__content {
  color: #fff;
}
</style>
