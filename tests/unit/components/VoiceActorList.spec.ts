import { mount } from "@vue/test-utils";
import VoiceActorList from '@/components/VoiceActorList.vue';
import VoiceActorCard from '@/components/VoiceActorCard.vue';
import { VoiceActor } from '@/api/models/VoiceActor';

describe("VoiceActorList", () => {
  const actor = {} as VoiceActor;
  const actors = 20;
  const wrapper = mount(VoiceActorList, {
    propsData: {
      actors: new Array(20).fill(actor)
    }
  });

  it("Renders all actors", () => {
    expect(wrapper.findAllComponents(VoiceActorCard).length).toBe(actors);
  });
});
