<template>
  <v-app>
    <v-app-bar app light>
      <div class="d-flex align-center">
        <v-img
          alt="Voice123 Logo"
          class="shrink mr-2 voice123Logo"
          contain
          src="https://voice123.com/static/img/logo-blm.0195be51.svg"
          transition="scale-transition"
          width="130"
        />
      </div>
      <v-spacer />
      <SearchBar @onSearch="handleSearch" />
      <v-spacer />
    </v-app-bar>

    <v-main v-if="!loading">
      <VoiceActorList :actors="actors" :keyword="keyword" />
      <Pagination :pagination="pagination" @goToPage="goToPage" />
    </v-main>
    <div v-show="loading" class="loader">
      <v-progress-circular indeterminate color="primary" size="100"></v-progress-circular>
      <h3 class="loader-message">We are looking for someone who will help you achieve your goals...</h3>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import SearchBar from "./components/SearchBar.vue";
import VoiceActorList from "./components/VoiceActorList.vue";
import Pagination from "./components/Pagination.vue";
import { getActors } from "./api";
import { ApiResponse } from "./api/models/ApiRespose";
import { VoiceActor } from "./api/models/VoiceActor";

export default Vue.extend({
  name: "App",

  components: {
    SearchBar,
    VoiceActorList,
    Pagination
  },

  mounted() {
    this.fetchData();
  },

  data: () => ({
    actors: [] as VoiceActor[],
    pagination: null as any,
    keyword: "",
    loading: true
  }),
  methods: {
    handleSearch(keyword: string) {
      this.keyword = keyword;
      this.actors = [];
      this.fetchData(keyword, 1);
    },
    goToPage(page: number) {
      this.fetchData(this.keyword, page);
    },
    async fetchData(keyword = "", page = 1) {
      this.loading = true;
      const data = await getActors(keyword, page);
      this.actors = data.voiceActors;
      this.pagination = data.pagination;
      this.loading = false;
    }
  }
});
</script>
<style scoped>
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader-message {
  margin-top: 25px;
  color: #888;
}
</style>