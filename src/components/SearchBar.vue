<template>
  <div class="searchBar d-flex">
    <v-text-field
      v-model="search"
      clearable
      flat
      solo-inverted
      hide-details
      light
      @keyup.enter="handleSearch"
      label="What are you looking for?"
    ></v-text-field>
    <v-btn icon @click="handleSearch">
      <v-icon>search</v-icon>
    </v-btn>
  </div>
</template>
<style scoped>
.searchBar {
  max-width: 800px;
  width: 100%;
}
</style>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SearchBar",

  methods: {
    handleSearch() {
      this.$emit("onSearch", this.search);
    }
  },

  data: () => ({
    search: ""
  })
});
</script>
