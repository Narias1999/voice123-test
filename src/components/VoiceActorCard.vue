<template>
  <v-card class="voiceActorCard">
    <v-row align="center">
      <v-col cols="9">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <v-img :src="actor.user.picture_small"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <a
                :href="`https://voice123.com/${actor.user.username}`"
                target="__blank"
              >{{actor.user.name}}</a>
            </v-list-item-title>
            <v-list-item-subtitle>{{actor.user.username}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3" class="player">
        <audio-player
          :music="{
             src: `https://voice123.com/mp3/${actor.relevant_sample.file}`,
             pic: actor.user.picture_small
          }"
          mini
        ></audio-player>
      </v-col>
    </v-row>
    <v-card-text>
      <div v-html="sumary"></div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { VoiceActor } from "../api/models/VoiceActor";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "VoiceActorCard",
  components: {
    AudioPlayer: () => import("vue-aplayer")
  }
})
export default class App extends Vue {
  @Prop()
  actor!: VoiceActor;

  @Prop()
  keyword!: string;

  paragraphFilter(paragraph: string) {
    const lowercased = this.keyword.toLowerCase().split(" ");
    return paragraph.search(new RegExp(lowercased.join("|"), "ig")) > -1;
  }

  get sumary(): string {
    if (!this.actor.summary) return "Summary not available 😞";
    const paragraphs = this.actor.summary.split("\n");
    const filtered = paragraphs.filter(this.paragraphFilter);
    if (!filtered[0]) return paragraphs[0];

    const splittedKeywords = this.keyword.split(" ");

    return filtered[0].replace(
      new RegExp(splittedKeywords.join("|"), "ig"),
      (word: string) => `<strong>${word}</strong>`
    );
  }
}
</script>
<style scoped>
.voiceActorCard {
  height: 100%;
}
.player {
  display: flex;
  justify-content: flex-end;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
<style>
strong {
  color: #111;
}
</style>