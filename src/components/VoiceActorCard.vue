<template>
  <v-card class="voiceActorCard">
    <v-row>
      <v-col cols="8">
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
      <v-col cols="4">player...</v-col>
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
  name: "VoiceActorCard"
})
export default class App extends Vue {
  @Prop()
  actor!: VoiceActor;

  @Prop()
  keyword!: string;

  paragraphFilter(paragraph: string) {
    return paragraph.toLowerCase().search(this.keyword.toLowerCase()) > -1;
  }

  get sumary(): string {
    const paragraphs = this.actor.summary.split("\n");
    const filtered = paragraphs.filter(this.paragraphFilter);
    if (!filtered[0]) return paragraphs[0];

    return filtered[0].replace(
      this.keyword,
      (word: string) => `<strong>${this.keyword}</strong>`
    );
  }
  x() {
    this.actor.user;
  }
}
</script>
<style scoped>
.voiceActorCard {
  height: 100%;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
strong {
  color: #111;
}
</style>