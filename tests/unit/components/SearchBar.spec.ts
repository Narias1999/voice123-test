import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar", () => {
  const wrapper = mount(SearchBar);

  it("Has an text field", () => {
    expect(wrapper.findAll("v-text-field").length).toBe(1);
  });

  it("Has a button", () => {
    expect(wrapper.findAll("v-btn").length).toBe(1);
  });

  it("Emmits search event on click button", async () => {
    const emitterWrapper = mount(SearchBar);
    const value = "foo bar2";

    emitterWrapper.setData({
      search: value
    });

    const button = emitterWrapper.find("v-btn");
    await button.trigger("click");
    expect(emitterWrapper.emitted().onSearch?.[0]).toEqual([value]);
  });
});
