<template>
  <v-container class="text-center">
    <v-content>
      <v-pagination
        :value="pagination.currentPage"
        :length="pagination.totalPages"
        @input="handleInput"
        @previous="handlePrevious"
        @next="handleNext"
      ></v-pagination>
    </v-content>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pagination",
  props: {
    pagination: Object
  },
  methods: {
    handleNext() {
      this.$emit("goToPage", this.pagination.currentPage + 1);
    },
    handlePrevious() {
      this.$emit("goToPage", this.pagination.currentPage - 1);
    },
    handleInput(page: number) {
      console.log(page);
      this.$emit("goToPage", page);
    }
  },
  data: () => ({})
});
</script>