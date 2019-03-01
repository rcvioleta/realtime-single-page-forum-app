<template>
  <v-container>
    <v-form ref="form">
      <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>

      <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>

      <v-btn color="success" @click="login">Login</v-btn>

      <v-btn color="error" @click="reset">Reset Form</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },

  methods: {
    login() {
      User.login(this.form);
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style>
</style>
