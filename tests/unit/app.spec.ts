import { shallowMount } from '@vue/test-utils';
import Layout from '@/App.vue';

describe('App.vue app layout and main controller', () => {
  const wrapper = shallowMount(Layout);

  it('Has toolbar', () => {
    expect(wrapper.contains('v-app-bar')).toBe(true);
  });

  it('Has voice123 logo', () => {
    expect(wrapper.contains('v-app-bar .logo')).toBe(true);
  });

});
