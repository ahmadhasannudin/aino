<template>
  <div>
    <!-- <NavBar></NavBar> -->
    <div v-for="category in APIData" :key="category.id">
      <div>
        <img
          class="card-img-top"
          :src="category.imageUrl"
          :alt="category.name"
        />
        <h4>{{ category.name }}</h4>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
// import NavBar from "../components/NavBar";
import { getAPI } from "../axios-api";
import { mapState } from "vuex";
export default {
  name: "Posts",
  components: {
    // NavBar,
  },
  computed: mapState(["APIData"]),
  created() {
    getAPI
      .get("/merchant/2/outlet/1/category", {
        headers: { Authorization: `Bearer ${this.$store.state.accessToken}` },
      })
      .then((response) => {
        this.$store.state.APIData = response.data.data;
      });
  },
};
</script>
