<template>
  <div class="card">
    <div class="card-body">
      <p v-if="incorectAuth">incorect user name or password</p>
      <form v-on:submit.prevent="login">
        <input type="text" v-model="username" /><br />
        <input type="password" v-model="password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      incorectAuth: false,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        })
        .catch((err) => {
          console.log(err);
          this.incorectAuth = true;
        });
    },
  },
};
</script>
