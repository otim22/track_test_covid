
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import { mount } from '@vue/test-utils'
import CovidLiveUpdates from '@/components/views/helpers/CovidLiveUpdates.vue'
import filters from '@/filters'

Vue.use(filters)
Vue.use(BootstrapVue);

describe('CovidLiveUpdates.vue', () => {
    let wrapper

    beforeEach(() => {
        const propsData = {
            count: 5,
            cssClass: 'danger',
            title: 'Total Death'
        }
        wrapper = mount(CovidLiveUpdates, { propsData })
    })
    it('should have the correct data', () => {
        expect(wrapper.find('.card-title').text()).toBe('Total Death')
        expect(wrapper.find('p').text()).toBe('5')
    })
})