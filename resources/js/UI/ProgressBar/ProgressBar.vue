<template>
  <div>
    <app-backdrop></app-backdrop>
    <div class="progress-wrapper">
      <h3>{{ errMsg }}</h3>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </div>
  </div>
</template>

<script>
import Backdrop from "../Backdrop/Backdrop";

export default {
  props: ["errMsg"],
  components: {
    "app-backdrop": Backdrop
  }
};
</script>

<style scoped>
.progress-wrapper {
  position: absolute;
  width: 50%;
  padding: 5rem;
  box-shadow: 0 0 15px #ccc;
  border-radius: 5px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
  background-color: #fff;
}

.v-progress-linear {
  /* position: absolute;
  width: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300; */
}
</style>

