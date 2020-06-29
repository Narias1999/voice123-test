<template>
  <div class="Player">
    <audio :src="`https://voice123.com/mp3/${sample.file}`"></audio>
    <div class="Player-controls"></div>
    <div class="Player-title">
      <span>{{sample.name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RelevantSample } from "../api/models/RelevantSample";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "Player"
})
export default class App extends Vue {
  @Prop()
  sample!: RelevantSample;
}
</script>
<style scoped>
.voiceActorCard {
  height: 205px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.location {
  color: #888;
}
</style>