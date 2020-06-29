<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col v-for="actor in actors" :key="actor.id" cols="12" sm="6" md="6" lg="6">
        <VoiceActorCard :actor="actor" :keyword="keyword" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import VoiceActorCard from "./VoiceActorCard.vue";
import { VoiceActor } from "../api/models/VoiceActor";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "VoiceActorList",
  components: {
    VoiceActorCard
  }
})
export default class App extends Vue {
  @Prop()
  public actors!: VoiceActor[];
  @Prop()
  public keyword!: string;
}
</script>
