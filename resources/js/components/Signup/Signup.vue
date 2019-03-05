<template>
  <v-container>
    <template>
      <v-form ref="form">
        <v-text-field type="text" v-model="form.name" label="Name"></v-text-field>
        <template v-if="errors.name">
          <ul v-for="error in errors.name" :key="error">
            <li class="text--danger">{{ error }}</li>
          </ul>
        </template>

        <v-text-field type="email" v-model="form.email" name="cccc" label="E-mail"></v-text-field>
        <template v-if="errors.email">
          <ul v-for="error in errors.email" :key="error">
            <li class="text--danger">{{ error }}</li>
          </ul>
        </template>

        <v-text-field type="password" v-model="form.password" label="Password"></v-text-field>
        <template v-if="errors.password">
          <ul v-for="error in errors.password" :key="error">
            <li class="text--danger">{{ error }}</li>
          </ul>
        </template>

        <v-text-field
          type="password"
          v-model="form.password_confirmation"
          label="Confirm Password"
          required
        ></v-text-field>
        <template v-if="errors.password_confirmation">
          <ul v-for="error in errors.password_confirmation" :key="error">
            <li class="text--danger">{{ error }}</li>
          </ul>
        </template>

        <v-btn class="success" @click="validate">Signup</v-btn>

        <router-link to="/login">
          <v-btn class="orange">Login</v-btn>
        </router-link>
      </v-form>
      <progress-bar :errMsg="message" v-show="!loading"></progress-bar>
    </template>
  </v-container>
</template>

<script>
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import AppStorage from "../../helpers/AppStorage";

export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: {},
      message: "Wait a minute, we're signing you up",
      loading: true
    };
  },
  methods: {
    validate() {
      this.setLoading();
      axios
        .post("/api/auth/signup", this.form)
        .then(resp => {
          this.setLoading();
          console.log(resp);
          AppStorage.storeToken(resp);
        })
        .catch(err => {
          this.setLoading();
          this.errors = err.response.data.errors;
        });
    },
    setLoading() {
      this.loading = !this.loading;
    }
  },
  components: {
    "progress-bar": ProgressBar
  }
};
</script>

<style scoped>
.text--danger {
  color: #e74c3c;
  margin: 0;
}
</style>
