<template>
  <div class="log"></div>
</template>
<script>
export default {
  name: "logout",
  created() {
    this.$store.dispatch("userLogout").then(() => {
      this.$router.push({ name: "login" });
    });
  },
};
</script>
