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

    <v-content>
      <VoiceActorList :actors="actors" :keyword="keyword" />
      <Pagination :pagination="pagination" />
    </v-content>
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
    keyword: ""
  }),
  methods: {
    handleSearch(keyword: string) {
      this.keyword = keyword;
      this.actors = [];
      this.fetchData(keyword, 1);
    },
    async fetchData(keyword = "", page = 1) {
      const data = await getActors(keyword, 1);
      this.actors = data.voiceActors;
      this.pagination = data.pagination;
    }
  }
});
</script>
