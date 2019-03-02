<template>
  <v-container>
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="Password" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="Confirm Password" required></v-text-field>

        <v-btn color="success" @click="validate">Signup</v-btn>
      </v-form>
    </template>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
