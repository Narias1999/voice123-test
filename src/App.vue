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
      <SearchBar />
      <v-spacer />
    </v-app-bar>

    <v-content>
      <VoiceActorList />
      <Pagination />
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

  data: () => ({}),
  methods: {
    fetchData(): Promise<ApiResponse> {
      return getActors("", 1);
    }
  }
});
</script>
