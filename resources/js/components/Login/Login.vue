<template>
  <v-container>
    <v-form ref="form">
      <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>

      <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>

      <v-btn color="success" @click="login">Login</v-btn>

      <router-link to="/signup">
        <v-btn class="signup" flat>Signup</v-btn>
      </router-link>
    </v-form>
    <progress-bar v-show="!loading"></progress-bar>
  </v-container>
</template>

<script>
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import Token from "../../helpers/Token";
import AppStorage from "../../helpers/AppStorage";

export default {
  data: () => {
    return {
      form: {
        email: null,
        password: null
      },
      loading: true
    };
  },
  components: {
    "progress-bar": ProgressBar
  },

  methods: {
    login() {
      this.setLoading();
      axios
        .post("/api/auth/login", this.form)
        .then(resp => {
          this.storeToken(resp);
          this.setLoading();
        })
        .catch(err => {
          console.log("error", err.response.data);
          this.setLoading();
        });
      this.reset();
    },
    storeToken(response) {
      const access_token = response.data.access_token;
      const username = response.data.user;
      if (Token.isValid(access_token)) {
        AppStorage.store(access_token, username);
        console.log("Logged in!");
      }
    },
    hasToken() {
      const storedToken = AppStorage.getToken();
      if (storedToken) {
        return Token.isValid(storedToken) ? true : false;
      }
      return false;
    },
    logout() {
      AppStorage.clear();
    },
    getUserName() {
      return AppStorage.getUser();
    },
    setLoading() {
      this.loading = !this.loading;
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.signup {
  background-color: orange;
}

.signup a {
  color: #fff;
}
</style>
