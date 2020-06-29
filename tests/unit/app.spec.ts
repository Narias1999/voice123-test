import { shallowMount } from "@vue/test-utils";
import VoiceActorList from "@/components/VoiceActorList.vue";
import Pagination from "@/components/Pagination.vue";
import SearchBar from "@/components/SearchBar.vue";
import Layout from "@/App.vue";

describe("App.vue app layout and main controller", () => {
  const wrapper = shallowMount(Layout);
  wrapper.setData({
    actors: [],
    loading: false
  });

  it("Has toolbar", () => {
    expect(wrapper.get("v-app-bar"));
  });

  it("Has voice123 logo", () => {
    expect(wrapper.get("v-app-bar .voice123Logo"));
  });

  it("Has search bar", () => {
    expect(wrapper.findComponent(SearchBar).exists()).toBe(true);
  });

  it("Has Voice Actor List", () => {
    expect(wrapper.findComponent(VoiceActorList).exists()).toBe(true);
  });

  it("Has Pagination", () => {
    expect(wrapper.findComponent(Pagination).exists()).toBe(true);
  });
});
