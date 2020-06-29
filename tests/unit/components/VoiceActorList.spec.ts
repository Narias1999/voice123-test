import { mount } from "@vue/test-utils";
import VoiceActorList from "@/components/VoiceActorList.vue";
import VoiceActorCard from "@/components/VoiceActorCard.vue";
import { actor } from "./../../__mocks__/actor"

describe("VoiceActorList", () => {
  const actors = 20;
  const wrapper = mount(VoiceActorList, {
    propsData: {
      actors: new Array(20).fill(actor),
      keyword: ''
    }
  });

  it("Renders all actors", () => {
    expect(wrapper.findAllComponents(VoiceActorCard).length).toBe(actors);
  });
});
